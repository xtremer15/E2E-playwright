import { Page } from "@playwright/test";

export async function retryWithBackoff<T>(
    fn: () => Promise<T>,
    retries: number = 3,
    delayMs: number = 500,
    backoffFactor: number = 2
): Promise<T> {
    let attempt = 0;
    let currentDelay = delayMs;

    while (attempt < retries) {
        try {
            return await fn();
        } catch (error) {
            attempt++;
            if (attempt >= retries) {
                throw new Error(`Failed after ${retries} attempts: ${error}`);
            }
            console.warn(`Attempt ${attempt} failed. Retrying in ${currentDelay}ms...`);
            await new Promise(resolve => setTimeout(resolve, currentDelay));
            currentDelay *= backoffFactor;
        }
    }

    // This should never be reached
    throw new Error("Unexpected retry failure");
}

export async function awaitPageNavigation(page: Page, url: string): Promise<void> {
    await retryWithBackoff(() => page.waitForURL(url))
    await page.locator('body').waitFor({ state: "attached" })

}