import {expect, type Page, type Locator} from '@playwright/test';

export class MyinfoPage {
    readonly page: Page;
    readonly myInfoLink: Locator;
    readonly menuContactDetails: Locator;
    readonly titleContactDetails: Locator;
    readonly contactStreet1: Locator;
    readonly contactStreet2: Locator;
    readonly city: Locator;
    readonly stateProvince: Locator;
    readonly zipPostalCode: Locator;
    readonly countrySelect: Locator;
    readonly homePhone: Locator;
    readonly mobilePhone: Locator;
    readonly workPhone: Locator;
    readonly workEmail: Locator;
    readonly otherEmail: Locator;
    readonly buttonSaveContact: Locator;
    readonly addAttachments: Locator;
    readonly buttonSelectFile: Locator;
    readonly textarea: Locator;
    readonly buttonSaveAttachment: Locator;

    constructor(page: Page) {
        this.page = page;
        this.myInfoLink = page.locator('text=My Info');
        this.menuContactDetails = page.locator('text=Contact Details');
        this.titleContactDetails = page.locator('//h6[normalize-space()="Contact Details"]');
        this.contactStreet1 = page.locator('text=Street 1Street 2CityState/ProvinceZip/Postal CodeCountry-- Select -- >> input >> nth=0');
        this.contactStreet2 = page.locator('text=Street 1Street 2CityState/ProvinceZip/Postal CodeCountry-- Select -- >> input >> nth=1');
        this.stateProvince = page.locator('text=Street 1Street 2CityState/ProvinceZip/Postal CodeCountry-- Select -- >> input >> nth=3');
        this.city = page.locator('text=Street 1Street 2CityState/ProvinceZip/Postal CodeCountry-- Select -- >> input >> nth=2');
        this.zipPostalCode = page.locator('text=Street 1Street 2CityState/ProvinceZip/Postal CodeCountry-- Select -- >> input >> nth=4');
        this.countrySelect = page.locator('//div[@class="oxd-select-text-input"]');
        this.homePhone = page.locator('text=HomeMobileWork >> input >> nth=0');
        this.mobilePhone = page.locator('text=HomeMobileWork >> input >> nth=1');
        this.workPhone = page.locator('text=HomeMobileWork >> input >> nth=2');
        this.workEmail = page.locator('text=Work EmailOther Email >> input >> nth=0');
        this.otherEmail = page.locator('text=Work EmailOther Email >> input >> nth=1');
        this.buttonSaveContact = page.locator('text=* Required Save >> button');
        this.addAttachments = page.locator('//button[normalize-space()="Add"]');
        this.buttonSelectFile = page.locator('text=Browse');
        this.textarea = page.locator('textarea[placeholder="Type comment here"]');
        this.buttonSaveAttachment = page.locator('text=Save >> nth=1');
    }

    async navigateToMyInfoPage() {
        await this.myInfoLink.click();
        await this.page.waitForLoadState();
        expect(this.page.url()).toContain('/viewPersonalDetails');
    }

    async contactDetails() {
        await this.menuContactDetails.click();
        await expect(this.titleContactDetails.getByText('Contact Details')).toBeVisible();
        await this.contactStreet1.fill('123 Main St');
        await this.contactStreet2.fill('Apt 456');
        await this.city.fill('New York City');
        await this.stateProvince.fill('NY');
        await this.zipPostalCode.fill('10001');
        await this.countrySelect.click();
        await this.page.getByText('Brazil').click();
        await this.homePhone.fill('(123) 456-7890');
        await this.mobilePhone.fill('(987) 654-3210');
        await this.workPhone.clear();
        await this.workPhone.fill('(555) 555-5555');
        await this.workEmail.fill('john.doe@example.com');
        await this.otherEmail.fill('john.doe@my-job.com');
        await this.buttonSaveContact.click();
        await this.addAttachments.click();

        // Start waiting for file chooser before clicking. Note no await.
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.buttonSelectFile.click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles('./attachment/nature.jpg');

        await this.textarea.fill('This is a comment about my contact details.');
        await this.buttonSaveAttachment.click();
    }
}