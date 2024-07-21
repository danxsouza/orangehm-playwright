import { test as base} from '@playwright/test';
import { LoginPage } from '../pages/login-page'
import { LogOutPage } from '../pages/logout-page'

type myFixtures = {
    loginPage: LoginPage
    logoutPage: LogOutPage
}

export const test = base.extend<myFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    logoutPage: async ({ page }, use) => {
        await use(new LogOutPage(page));
    }
})

export { expect } from '@playwright/test';