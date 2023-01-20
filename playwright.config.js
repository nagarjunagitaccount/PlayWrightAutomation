// @ts-check
const { devices } = require('@playwright/test');



const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 7000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 15000
  },
reporter:'html',
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'https://miro.com/',
   browserName:'chromium',
   headless:false,
   screenshot:'on',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    Viewport:{
      width:1920,height:1080}
  }

};

module.exports = config;
