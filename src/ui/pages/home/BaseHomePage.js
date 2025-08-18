import { BasePage } from '../BasePage';
import { GlobalFeedTab } from '../../components/GlobalFeedTab';
import { PopularTags } from '../../components/PopularTags';

export class BaseHomePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this._url = '/';

    this.globalFeed = new GlobalFeedTab(this.page, userId);
    this.popularTags = new PopularTags(page);
  }
}
