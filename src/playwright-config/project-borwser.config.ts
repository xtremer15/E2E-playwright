import { devices } from "@playwright/test";
import { channel } from "diagnostics_channel";

export const PROJECT_BROWSER_CONFIG: any = [
    {
        name: 'login-chromium',
        testMatch: /.*\/login\/.*\.spec\.ts/,
        use: { ...devices['Desktop Firefox'] },
    },
    {
        name: 'jira-clone-chromium',
        testMatch: /.*\/jira-clone\/.*\.spec\.ts/,
        dependencies: ['login-chromium'],
        use: { ...devices['Desktop Chrome'] },

    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
]