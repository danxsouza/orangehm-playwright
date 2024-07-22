import {expect, type Page, type Locator} from '@playwright/test';

export class AboutPage {
    readonly page: Page;
    readonly aboutLink: Locator;
    readonly aboutText: Locator;
    readonly companyName: Locator;
    readonly version: Locator;
    readonly activeEmployees: Locator;
    readonly employeesTerminated: Locator;
    readonly buttonClose: Locator;

    constructor(page: Page) {
        this.page = page;
        this.aboutLink = page.locator('//a[normalize-space()="About"]');
        this.aboutText = page.locator('//h6[normalize-space()="About"]');
        this.companyName = page.locator('//p[normalize-space()="Company Name:"]');
        this.version = page.locator('//p[normalize-space()="Version:"]');
        this.activeEmployees = page.locator('//p[normalize-space()="Active Employees:"]');
        this.employeesTerminated = page.locator('//p[normalize-space()="Employees Terminated:"]');
        this.buttonClose = page.locator('//button[normalize-space()="×"]');
    }

    async navigateToAboutPage() {
        await this.aboutLink.click()
        await expect(this.aboutText).toContainText('About');
        await expect(this.companyName).toContainText('Company Name:');
        await expect(this.version).toContainText('Version:');
        await expect(this.activeEmployees).toContainText('Active Employees:');
        await expect(this.employeesTerminated).toContainText('Employees Terminated:');
        await expect(this.buttonClose, 'Should be visible to close').toBeVisible();
        await this.buttonClose.click();
    }
}