// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    // Perform global setup steps here, such as logging in and saving state
    console.log('Global setup is running...');
}

export default globalSetup;