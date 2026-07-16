import { BasePage } from '../BasePage';
import { GlobalFeedTab } from '../../components/feed/GlobalFeedTab';
import { PopularTags } from '../../components/feed/PopularTags';

export class BaseHomePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this._url = '/';
    this.globalFeed = new GlobalFeedTab(this.page, userId);
    this.popularTags = new PopularTags(this.page, userId);
  }

  async clickGlobalFeedTab() {
    await this.step('Click on the Global Feed tab', async () => {
      await this.globalFeed.open();
    });
  }
}
