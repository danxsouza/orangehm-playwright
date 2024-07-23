import {test, expect} from '@playwright/test';

test('example', async ({page,  context}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('orangehrm_admin');
    await page.locator('input[name="password"]').fill('Admin123');
    await page.locator('button[type="submit"]').click();

    //Second tab

    const newTab = await context.newPage();
    await newTab.goto('https://starterhelp.orangehrm.com/hc/en-us');
    await newTab.locator('[placeholder="Search"]').fill('Accessing Help Page');

});