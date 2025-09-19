import { BaseComponent } from "./BaseComponent";
import { expect } from "allure-playwright";
import { ArticleFeedItem } from './ArticleFeedItem';

export class TagFeedTab extends BaseComponent {

  constructor(page, userId = 0) {
    super(page, userId);
    this.loadingSpinner = this.page.locator('.loading-spinner');

    this.articleFeedItem = new ArticleFeedItem(page);
  
  }

  getLinkTagFeedTab(tagName) {
    return this.tagFeedTabSectionLink = this.page.getByText(tagName).first();
  }

  async assertTagFeedTabIsVisible(tagName) {
    await this.step(`Assert 'Global Feed' link is visible`, async () => {
      await expect(this.getLinkTagFeedTab(tagName)).toBeVisible();
    });
  }

  async assertLoadingSpinnerToHidden() {
    await this.step(`Assert loading spinner element to be hidden`, async () => {
      await expect(this.loadingSpinner).toBeHidden();
    });
  }
}