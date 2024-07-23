import { test, expect } from './fixtures/myfixtures';

test.describe('Accessing My Info Page',  { tag:'@myinfo' }, () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.loadPage();
        await loginPage.loginPage(process.env.USERNAME, process.env.PASSWORD);
    });

test('Contact Details', async ({ myInfoPage }) => {
    await myInfoPage.navigateToMyInfoPage();
    await myInfoPage.contactDetails();

 });

});