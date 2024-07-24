import {expect, type Page, type Locator} from '@playwright/test';

export class HelpPage {
    readonly page: Page;
    readonly helpLink: Locator;
    readonly signInButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.helpLink = page.locator('[aria-label="Topbar Menu"] button');
        this.signInButton = page.locator('//a[@class="sign-in"]');
    }

    async navigateToHelpPage() {
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            await this.helpLink.click()
    ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveTitle(/OrangeHRM/);
        await newPage.locator('[placeholder="Search"]').fill('Accessing Help Page');
        await newPage.locator('text=Admin User Guide').click();
        await expect(newPage).toHaveURL(/Admin-User-Guide/);
        await newPage.goBack();
        await newPage.locator('text=Employee User Guide').click();
        await expect(newPage).toHaveURL(/Employee-User-Guide/);
        await newPage.goBack();
        await newPage.locator('text=Mobile App').click();
        await expect(newPage).toHaveURL(/Mobile-App/);
        await newPage.goBack();
        await newPage.locator('text=AWS Guide').click();
        await expect(newPage).toHaveURL(/AWS-Guide/);
        await newPage.goBack();
        await newPage.locator('text=FAQs').click();
        await expect(newPage).toHaveURL(/FAQs/);
 }

}