import { expect } from '../../common/helpers/pw';
import { BaseComponent } from './BaseComponent';
import { ArticleFeedItem } from './ArticleFeedItem';

export class GlobalFeedTab extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);

    this.globalFeedLink = page.getByText('Global Feed');
    this.articleFeedItem = new ArticleFeedItem(page, userId);
  }

  async open() {
    await this.step('Open Global Feed', async () => {
      await this.globalFeedLink.click();
    });
  }

  async assertTabLinkVisible() {
    await this.step('Assert Global Feed tab is visible', async () => {
      await expect(this.globalFeedLink).toBeVisible();
    });
  }

  async waitForArticle(title) {
    await this.step(`Wait for article '${title}' in Global Feed`, async () => {
      await expect
        .poll(
          async () => {
            await this.page.reload();

            return await this.articleFeedItem.articleItem(title).count();
          },
          {
            timeout: 30000,
            intervals: [1000, 2000, 3000],
          },
        )
        .toBeGreaterThan(0);
    });
  }
}
