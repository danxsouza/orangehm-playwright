import {test, expect} from './fixtures/myfixtures';

test.describe('Accessing About Page', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.loadPage();
        await loginPage.loginPage(process.env.USERNAME, process.env.PASSWORD);
    });

test('clicking about', async ({ aboutPage, logoutPage}) => {
    await logoutPage.dropdownButton.click();
    await aboutPage.navigateToAboutPage();
  });
});