export const USE_GLOBAL_SETUP: any = {
    /* Base URL to use in actions like `await page.goto('/')`. */
    //ToDO:Set as mobile url then change angular module to be just for web
    // 'https://flutter-login-module.vercel.app/',
    baseURL: "https://angular-login-module.vercel.app/login",
    actionTimeout: 5000,
    navigationTimeout: 15000,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    // storageState: 'src/storageState.json',

    acceptDownloads: false, // Accept downloads automatically

    // Credentials for HTTP authentication.
    httpCredentials: {
        username: 'user',
        password: 'pass',
    },

    // Whether to ignore HTTPS errors during navigation.
    ignoreHTTPSErrors: false,

    // Whether to emulate network being offline.
    offline: false,
    // Capture screenshot after each test failure.
    screenshot: 'only-on-failure',
}