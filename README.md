Install node modules
```bash
npm install
```
Install Playwright
```bash
npx playwright install
```
Run tests against Selenium Grid
```bash
SELENIUM_REMOTE_URL=http://testops.ndviet.org/selenium \
SELENIUM_REMOTE_CAPABILITIES='{"browserName": "chrome"}' \
DEBUG=pw:api,pw:protocol,pw:browser* \
npx playwright test
```