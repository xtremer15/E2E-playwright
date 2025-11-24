import { expect, Locator, Page } from "@playwright/test";
import { Input } from "../components/Input";
import { BaseComponent } from "../components/BaseComponent";
import { winLogger } from "./logger";

export abstract class BasePage {
  protected readonly page!: Page;
  readonly url!: string;

  constructor(page: Page) {
    this.page = this.createInterceptedPage(page);
    console.log("BasePage constructor called");

    return new Proxy(this, {
      get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (value instanceof BaseComponent) {
          return (target as any).createInterceptedComponent(value, String(prop));
        }
        return value;
      }
    });
  }

  async goTo(url: string): Promise<void> {
    await this.page.goto(url);
  }
  async waitForUrl(url: string): Promise<void> {
    expect(await this.page.url()).toBe(url);
  }


  async waitForElementVisibility(selector: any): Promise<void> {
    await this.page.waitForSelector(selector, { state: 'visible' });
    const isVisible = await this.page.locator(selector).isVisible()
    expect(isVisible).toBeTruthy();
  }



  async checkErrorMessage(locator: string, erorMessage: string) {
    await this.waitForElementVisibility(locator);
    const errorMsg = await this.page.locator(locator).innerText();
    expect(errorMsg).toBe(erorMessage);
  }

  locator(selector: string): Locator {
    const originalLocator = this.page.locator(selector);

    return new Proxy(originalLocator, {
      get: (target, prop: PropertyKey) => {
        const value = (target as any)[prop];
        if (typeof value === "function") {
          return async (...args: any[]) => {
            winLogger.info(
              `Calling method ${String(
                prop
              )} on locator: ${selector} with arguments: ${JSON.stringify(
                args
              )}`
            );
            console.log("target locator", target)
            console.log("args", ...args)

            const result = await value.call(target, ...args);
            console.log("result", result)
            winLogger.info(
              `Method ${String(
                prop
              )} on locator: ${selector} completed with result: ${result}`
            );
            return result;
          };
        }
        return value;
      },
    });
  }

  getByRole(role: string, options?: any): Locator {
    const originalLocator = this.page.getByRole(role as any, options);
    const selectorDescription = `role = ${role}${options ? ` with options ${JSON.stringify(options)}` : ""
      }`;

    return new Proxy(originalLocator, {
      get: (target, prop: PropertyKey) => {
        const value = (target as any)[prop];
        if (typeof value === "function") {
          return async (...args: any[]) => {
            if (args.length > 0) {
              winLogger.info(`Arguments: ${JSON.stringify(args)}`);
            }
            const result = await value.call(target, ...args);
            winLogger.info(
              `Method ${String(prop)} for role: ${selectorDescription} executed`
            );
            if (result != undefined) {
              winLogger.info(`Result: ${result}`);
            }
            return result;
          };
        }
        return value;
      },
    });
  }

  getByText(text: string, options?: any): Locator {
    const originalLocator = this.page.getByText(text, options);
    const selectorDescription = `text=${text}${options ? ` with options ${JSON.stringify(options)}` : ""
      }`;

    return new Proxy(originalLocator, {
      get: (target, prop: PropertyKey) => {
        const value = (target as any)[prop];
        if (typeof value === "function") {
          return async (...args: any[]) => {
            winLogger.info(
              `Calling method ${String(
                prop
              )} for text: ${selectorDescription} with arguments: ${JSON.stringify(
                args
              )}`
            );
            const result = await value.call(target, ...args);
            winLogger.info(
              `Method ${String(
                prop
              )} for text: ${selectorDescription} completed with result: ${result}`
            );
            return result;
          };
        }
        return value;
      },
    });
  }

  private get isLoggingEnabled(): boolean {
    return true; // process.env.LOG_LOCATORS === 'true';
  }

  // ---- Type Guard for Locators ----
  // ---- Locator type guard ----
  private isLocator(obj: any): obj is Locator {
    return !!obj && typeof obj === 'object' && typeof obj['locator'] === 'function';
  }

  // ---- Locator Proxy ----
  private createInterceptedLocator(locator: Locator, selector: string): Locator {
    const self = this;

    return new Proxy(locator, {
      get(target, prop, receiver) {
        const orig = Reflect.get(target, prop, receiver);

        if (typeof orig === 'function') {
          return (...args: any[]) => {
            if (self.isLoggingEnabled) {
              console.log(`[Locator.${String(prop)}] on '${selector}' with:`, args);
            }

            try {
              const result = orig.apply(target, args);

              // Handle async results
              if (result instanceof Promise) {
                return result.then(
                  res => {
                    if (self.isLoggingEnabled) {
                      console.log(`[Locator.${String(prop)}] success on '${selector}'`);
                    }
                    return res;
                  },
                  err => {
                    if (self.isLoggingEnabled) {
                      console.error(`[Locator.${String(prop)}] failed on '${selector}'`, err);
                    }
                    throw err;
                  }
                );
              }

              // Re-wrap chained locators
              if (self.isLocator(result)) {
                const chainedSelector =
                  `${selector}.${String(prop)}(${args.map(a => JSON.stringify(a)).join(", ")})`;
                return self.createInterceptedLocator(result, chainedSelector);
              }

              return result;
            } catch (e) {
              if (self.isLoggingEnabled) {
                console.error(`[Locator.${String(prop)}] failed on '${selector}'`, e);
              }
              throw e;
            }
          };
        }

        return orig;
      },
    });
  }

  private createInterceptedPage(page: Page): Page {
    const self = this;

    return new Proxy(page, {
      get(target, prop, receiver) {
        const orig = Reflect.get(target, prop, receiver);

        // Intercept locator-producing methods
        const locatorFactories: (keyof Page)[] = [
          'locator',
          'getByRole',
          'getByText',
          'getByLabel',
          'getByPlaceholder',
          'getByAltText',
          'getByTitle',
          'getByTestId',
        ];

        if (locatorFactories.includes(prop as keyof Page)) {
          return (...args: any[]): Locator => {
            if (self.isLoggingEnabled) {
              console.log(`[Intercepted] page.${String(prop)}() called with:`, args);
            }

            const locator = (orig as Function).apply(target, args);
            const selector = `${String(prop)}(${args.map(a => JSON.stringify(a)).join(", ")})`;

            return self.createInterceptedLocator(locator, selector);
          };
        }

        return orig;
      },
    });
  }

  private createInterceptedComponent(component: any, name: string): any {
    const self = this;
    return new Proxy(component, {
      get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);

        if (value instanceof BaseComponent) {
          return self.createInterceptedComponent(value, `${name}.${String(prop)}`);
        }

        if (typeof value === 'function') {
          return async (...args: any[]) => {
            if (self.isLoggingEnabled) {
              console.log(`[Component] ${name}.${String(prop)} called with:`, args);
            }
            try {
              const result = await value.apply(target, args);
              if (self.isLoggingEnabled) {
                console.log(`[Component] ${name}.${String(prop)} success`);
              }

              if (result instanceof BaseComponent) {
                return self.createInterceptedComponent(result, `${name}.${String(prop)}()`);
              }

              return result;
            } catch (error) {
              if (self.isLoggingEnabled) {
                console.error(`[Component] ${name}.${String(prop)} failed`, error);
              }
              throw error;
            }
          };
        }
        return value;
      }
    });
  }

}