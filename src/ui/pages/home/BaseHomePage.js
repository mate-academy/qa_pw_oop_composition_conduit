import { BasePage } from '../BasePage';
import { GlobalFeedTab } from '../../components/feed/GlobalFeedTab';
import { PopularTags } from '../../components/PopularTags';

export class BaseHomePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this._url = '/';
    this.globalFeedTab = new GlobalFeedTab(this.page, userId);
    this.popularTags = new PopularTags(this.page, userId);
  }

  async open() {
    await super.open('/');
  }
}
