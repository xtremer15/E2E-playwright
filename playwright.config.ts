import { defineConfig, devices } from '@playwright/test';
import { EXPECT_GLOBAL_SETUP } from './src/playwright-config/expect.config';
import { PROJECT_BROWSER_CONFIG } from './src/playwright-config/project-borwser.config';
import { USE_GLOBAL_SETUP } from './src/playwright-config/use.config';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  testIgnore: '*test-assets',
  outputDir: 'src/Ftest-results/',
  timeout: 3000,
  // path to the global setup files.
  globalSetup: require.resolve('./src/global.setup.ts'),
  // path to the global teardown files.
  globalTeardown: require.resolve('./src/global.teardown.ts'),
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: USE_GLOBAL_SETUP,

  expect: EXPECT_GLOBAL_SETUP,
  /* Configure projects for major browsers */
  projects: PROJECT_BROWSER_CONFIG

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
