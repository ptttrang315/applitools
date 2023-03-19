import { chromium, firefox, test } from "@playwright/test"

test("Login test applitools web", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://auth.applitools.com/users/login?")
    await page.fill("//input[@id='email']", "test_001@ndviet.org")
    await page.fill("//input[@id='password']", "Testing..001")
    await page.click("//button[@type='submit']")
    await page.waitForTimeout(5000);

    // open a new tab with previous context
    const page1 = await context.newPage();
    await page1.goto("https://auth.applitools.com/users/login?")
    await page1.waitForTimeout(5000);

    //open a new Chrome browser
    const newContext = await browser.newContext();
    const newPage = await newContext.newPage();
    await newPage.goto("https://auth.applitools.com/users/login?")
    await newPage.waitForTimeout(5000);

    //open and login by Microsoft Edge browser
    const browserME = await chromium.launch({
        channel: "msedge",
    });
    const contextME = await browserME.newContext();
    const pageME = await contextME.newPage();

    await pageME.goto("https://auth.applitools.com/users/login?")
    await pageME.fill("//input[@id='email']", "test_001@ndviet.org")
    await pageME.fill("//input[@id='password']", "Testing..001")
    await pageME.click("//button[@type='submit']")
    await pageME.waitForTimeout(5000);

    //open and login by Firefox
    const browserFirefox = await firefox.launch();
    const contextFirefox = await browserFirefox.newContext();
    const pageFirefox = await contextFirefox.newPage();

    await pageFirefox.goto("https://auth.applitools.com/users/login?")
    await pageFirefox.fill("//input[@id='email']", "test_001@ndviet.org")
    await pageFirefox.fill("//input[@id='password']", "Testing..001")
    await pageFirefox.click("//button[@type='submit']")
    await pageFirefox.waitForTimeout(5000);
}
)