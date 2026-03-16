import { Page, Locator } from '@playwright/test';

export class SelectCampaignPage {

  page: Page;
  firstSelectButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // locator for Select button
    this.firstSelectButton = page.locator('tbody tr').first().locator('button.select-btn');
  }

  async clickSelectButton() {
    await this.firstSelectButton.click();
  }

}