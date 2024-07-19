import { expect, type Page, type Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator('input[placeholder="Username"]');
        this.passwordInput = page.locator('input[placeholder="Password"]');
        this.submitButton = page.locator('button[type="submit"]');
    }

    async loginPage(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
    async loadPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
}