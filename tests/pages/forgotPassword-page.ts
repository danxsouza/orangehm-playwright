import { expect, type Page, type Locator } from '@playwright/test';

export class forgotPasswordPage {
    readonly page: Page;
    readonly forgotPasswordLink: Locator;
    readonly buttonCancel: Locator;
    readonly buttonResetPassword: Locator;

    constructor(page: Page) {
        this.page = page;
        this.forgotPasswordLink = page.locator('text=Forgot your password?');
        this.buttonCancel = page.locator('text=Cancel');
        this.buttonResetPassword = page.locator('button[type="submit"]');
    }

    async clickForgotPasswordLink() {
       await this.forgotPasswordLink.click();
       await this.buttonCancel.waitFor({ state: 'visible' });
       await this.buttonResetPassword.waitFor({ state: 'visible' });

    }

}