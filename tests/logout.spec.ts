import { test, expect } from './fixtures/myfixtures';


test.describe('User should be logout with successfully', { tag:'@logout' },() => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.loadPage();
        await loginPage.loginPage(process.env.USERNAME, process.env.PASSWORD);
    });

    test('I click to logout', async ({ logoutPage }) => {
        await logoutPage.logout();
    });
});