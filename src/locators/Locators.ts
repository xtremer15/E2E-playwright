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
    const locatorsPath = path.resolve(__dirname, './locators.json');
    // console.log('🔍 Loading locators from:', locatorsPath);
    const rawData = fs.readFileSync(locatorsPath, 'utf-8');
    const parsedData = JSON.parse(rawData);
    // console.log('📄 Loaded locators:', parsedData); // <-- Add this
    return parsedData
  }

  // Get locators for a specific page
  public getLocators(page: string): { [element: string]: string } {
    const localePage = this.locators[page];
    // console.log(`🔍 Getting locators for page: ${page}`, localePage);
    return localePage
  }
}
