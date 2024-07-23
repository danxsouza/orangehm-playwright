import {test, expect} from './fixtures/myfixtures';

test.describe('Accessing Help Page', { tag:'@help' } ,() => {

    test.beforeEach(async ({loginPage}) => {
        await loginPage.loadPage();
        await loginPage.loginPage(process.env.USERNAME, process.env.PASSWORD);
    });

    test('clicking to access help', async ({ helpPage }) => {
        await helpPage.navigateToHelpPage();
    });

})