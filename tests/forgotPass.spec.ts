import {test} from './fixtures/myfixtures';

test.describe('Forgot Password',  { tag:'@forgotpass' }, () => {
        test.beforeEach(async ({loginPage}) => {
            await loginPage.loadPage();
        });


    test('I click to forgot password and navigate to the forgot password page', async ({ forgotPasswordPage }) => {
        await forgotPasswordPage.clickForgotPasswordLink();
    });

    test('I click on the cancel button and return main page', async ({ forgotPasswordPage }) => {
        await forgotPasswordPage.clickCancelButton();
    })
});