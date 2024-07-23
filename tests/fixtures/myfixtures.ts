import { test as base} from '@playwright/test';
import { LoginPage } from '../pages/login-page'
import { LogOutPage } from '../pages/logout-page'
import { forgotPassPage } from '../pages/forgotPass-page'
import { AboutPage } from '../pages/about'
import {helpPage} from "../pages/help-page";


type myFixtures = {
    loginPage: LoginPage
    logoutPage: LogOutPage
    forgotPasswordPage: forgotPassPage
    aboutPage: AboutPage
    helpPage: helpPage
}

export const test = base.extend<myFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    logoutPage: async ({ page }, use) => {
        await use(new LogOutPage(page));
    },

    forgotPasswordPage: async ({ page }, use) => {
        await use(new forgotPassPage(page));
    },
    aboutPage: async ({ page }, use) => {
        await use(new AboutPage(page));
    },
    helpPage: async ({ page }, use) => {
        await use(new helpPage(page));
    }
})

export { expect } from '@playwright/test';