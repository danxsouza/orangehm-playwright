import { test as base} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { LogoutPage } from '../pages/logoutPage';
import { ForgotPasswordPage } from '../pages/forgotPasswordPage';
import { AboutPage } from '../pages/aboutPage';
import { HelpPage } from "../pages/helpPage";
import { MyinfoPage } from "../pages/myinfoPage";


type myFixtures = {
    loginPage: LoginPage
    logoutPage: LogoutPage
    forgotPasswordPage: ForgotPasswordPage
    aboutPage: AboutPage
    helpPage: HelpPage
    myInfoPage: MyinfoPage
}

export const test = base.extend<myFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    logoutPage: async ({ page }, use) => {
        await use(new LogoutPage(page));
    },

    forgotPasswordPage: async ({ page }, use) => {
        await use(new ForgotPasswordPage(page));
    },
    aboutPage: async ({ page }, use) => {
        await use(new AboutPage(page));
    },
    helpPage: async ({ page }, use) => {
        await use(new HelpPage(page));
    },
    myInfoPage: async ({ page }, use) => {
        await use(new MyinfoPage(page));
    }
})

export { expect } from '@playwright/test';