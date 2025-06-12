import * as fs from 'fs';
import * as path from 'path';

// Define the shape of the locators JSON file
interface Locators {
  [page: string]: {
    [element: string]: string;
  };
}

export class LocatorManager {
  private static instance: LocatorManager;
  private locators: Locators;

  private constructor() {
    this.locators = this.loadLocators();
  }

  // Implement singleton pattern
  public static getInstance(): LocatorManager {
    if (!LocatorManager.instance) {
      LocatorManager.instance = new LocatorManager();
    }
    return LocatorManager.instance;
  }

  // Load locators from JSON file
  private loadLocators(): Locators {
    const locatorsPath = path.resolve(__dirname, 'locators.json');
    const rawData = fs.readFileSync(locatorsPath, 'utf-8');
    return JSON.parse(rawData);
  }

  // Get locators for a specific page
  public getLocators(page: string): { [element: string]: string } {
    return this.locators[page.toLowerCase()];
  }
}
