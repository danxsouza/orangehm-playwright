import {expect, type Page, type Locator} from '@playwright/test';


export class MyInfoPage {

    readonly page: Page;
    readonly myInfoLink: Locator;
    readonly menucontactDetails: Locator;
    readonly titlecontactDetails: Locator;
    readonly contactStreet1: Locator;
    readonly contactStreet2: Locator;
    readonly city: Locator;
    readonly stateProvince: Locator;
    readonly zipPostalCode: Locator;
    readonly countrySelect: Locator;


constructor(page: Page) {
    this.page = page;
    this.myInfoLink = page.locator('text=My Info');
    this.menucontactDetails = page.locator('text=Contact Details');
    this.titlecontactDetails = page.locator('//h6[normalize-space()="Contact Details"]');
    this.contactStreet1 = page.locator('text=Street 1Street 2CityState/ProvinceZip/Postal CodeCountry-- Select -- >> input >> nth=0');
    this.contactStreet2 = page.locator('text=Street 1Street 2CityState/ProvinceZip/Postal CodeCountry-- Select -- >> input >> nth=1');
    this.stateProvince = page.locator('text=Street 1Street 2CityState/ProvinceZip/Postal CodeCountry-- Select -- >> input >> nth=3');
    this.city = page.locator('text=Street 1Street 2CityState/ProvinceZip/Postal CodeCountry-- Select -- >> input >> nth=2');
    this.zipPostalCode = page.locator('text=Street 1Street 2CityState/ProvinceZip/Postal CodeCountry-- Select -- >> input >> nth=4');
    this.countrySelect = page.locator('//div[@class="oxd-select-text-input"]');

}

async navigateToMyInfoPage() {
    await this.myInfoLink.click();
    await this.page.waitForLoadState();
    expect(this.page.url()).toContain('/viewPersonalDetails');

}




async contactDetails() {


    await this.menucontactDetails.click();
    await expect(this.titlecontactDetails.getByText('Contact Details')).toBeVisible();
    await this.contactStreet1.fill('123 Main St');
    await this.contactStreet2.fill('Apt 456');
    await this.city.fill('New York City');
    await this.stateProvince.fill('NY');
    await this.zipPostalCode.fill('10001');
    await this.countrySelect.click();
    await this.page.getByText('Brazil').click();
}


}