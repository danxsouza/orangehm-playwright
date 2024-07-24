import { expect, type Page, type Locator } from '@playwright/test';

export class ForgotPasswordPage {
    readonly page: Page;
    readonly forgotPasswordLink: Locator;
    readonly buttonCancel: Locator;
    readonly buttonResetPassword: Locator;
    readonly inputUsername: Locator;

    constructor(page: Page) {
        this.page = page;
        this.forgotPasswordLink = page.locator('text=Forgot your password?');
        this.buttonCancel = page.locator('text=Cancel');
        this.buttonResetPassword = page.locator('button[type="submit"]');
        this.inputUsername = page.locator('//input[@placeholder="Username"]');
    }

    async clickForgotPasswordLink() {
       await this.forgotPasswordLink.click();
       await expect(this.inputUsername).toBeVisible();
       await this.inputUsername.fill('Admin');
       await this.inputUsername.waitFor({ state: 'visible' });
       await this.buttonCancel.waitFor({ state: 'visible' });
       await this.buttonResetPassword.waitFor({ state: 'visible' });
    }

    async clickCancelButton() {
        await this.forgotPasswordLink.click();
        await this.buttonCancel.click();
        await expect(this.page).toHaveURL(process.env.BASE_URL);
        await this.page.screenshot({path: './screenshot/forgotPasswordCancel.png', fullPage: true});
    }

}