import { test as base} from '@playwright/test';
import { LoginPage } from '../pages/login-page'
import { LogOutPage } from '../pages/logout-page'
import { forgotPasswordPage } from '../pages/forgotPassword-page'
import { AboutPage } from '../pages/about'

type myFixtures = {
    loginPage: LoginPage
    logoutPage: LogOutPage
    forgotPasswordPage: forgotPasswordPage
    aboutPage: AboutPage
}

export const test = base.extend<myFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    logoutPage: async ({ page }, use) => {
        await use(new LogOutPage(page));
    },

    forgotPasswordPage: async ({ page }, use) => {
        await use(new forgotPasswordPage(page));
    },
    aboutPage: async ({ page }, use) => {
        await use(new AboutPage(page));
    }
})

export { expect } from '@playwright/test';