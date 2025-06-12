import { chromium, Browser } from 'playwright';

export class BrowserSingleton {
    private static instance: Browser | null;

    private constructor() { }

    static async getInstance(): Promise<Browser> {
        if (!BrowserSingleton.instance) {
            BrowserSingleton.instance = await chromium.launch();
        }
        return BrowserSingleton.instance;
    }

    static async closeBrowser(): Promise<void> {
        if (BrowserSingleton.instance) {
            await BrowserSingleton.instance.close();
            await BrowserSingleton.instance.removeAllListeners();
            BrowserSingleton.instance = null;
        }
    }
}
