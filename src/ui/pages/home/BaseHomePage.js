import { BasePage } from '../BasePage';
import { GlobalFeedTab } from '../../components/feeds/GlobalFeedTab';
import { PopularTags } from '../../components/PopularTags';
import { BaseHeader } from '../../components/header/BaseHeader';

export class BaseHomePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this._url = '/';
    this.globalFeed = new GlobalFeedTab(this.page, userId);
    this.popularTags = new PopularTags(this.page, userId);
    this.baseHeader = new BaseHeader(this.page, userId);
  }
}
