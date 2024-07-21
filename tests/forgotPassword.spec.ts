import {test, expect} from './fixtures/myfixtures';

test.describe('Forgot Password', () => {

        test.beforeEach(async ({loginPage}) => {
            await loginPage.loadPage();
        });


    test('I click to forgot password and navigate to the forgot password page', async ({ forgotPasswordPage }) => {
        await forgotPasswordPage.clickForgotPasswordLink();
    });

});