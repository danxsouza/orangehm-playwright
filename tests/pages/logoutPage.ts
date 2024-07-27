import {type Page, type Locator} from '@playwright/test';


export class LogoutPage {
    readonly page: Page;
    readonly dropdownButton: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dropdownButton = page.locator('//p[@class="oxd-userdropdown-name"]');
        this.logoutButton = page.locator('text=Logout');
    }

    async logout() {
        await this.dropdownButton.click();
        await this.logoutButton.click();
        await this.page.screenshot({path: '../screenshot/logout.png', fullPage: true});
    }


}