import {test, expect} from '@playwright/test';

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

test('test', async ({page}) => {
    await page.goto('https://auth.applitools.com/users/login?');
    await page.getByPlaceholder('Enter email').click();
    await page.getByPlaceholder('Enter email').fill('test_001@ndviet.org');
    await page.getByPlaceholder('Enter password').click();
    await page.getByPlaceholder('Enter password').fill('Testing..001');
    await page.getByRole('button', {name: 'Sign in', exact: true}).click();
    await delay(120000);
});