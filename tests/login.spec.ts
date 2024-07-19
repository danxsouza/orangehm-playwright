import {test, expect} from './fixtures/login-test';

test.describe('Login Page', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.loadPage();
    })


    test('Realizando o Login na página', async ({ loginPage }) => {
        await loginPage.loginPage('Admin', 'admin123');
        expect(await loginPage.page.locator('h6').innerText()).toBe('Dashboard');
        await loginPage.page.screenshot({path: './tests/screenshot/login.png', fullPage: true});
    });

});