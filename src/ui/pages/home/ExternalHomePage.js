import { BaseHomePage } from './BaseHomePage';
import { ExternalHeader } from '../../components/header/ExternalHeader';
import { TagFeed } from '../../components/TagFeed';
import { GlobalFeedTab } from '../../components/feeds/GlobalFeedTab';

export class ExternalHomePage extends BaseHomePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.header = new ExternalHeader(this.page, userId);
    this.tagFeed = new TagFeed(this.page, userId);
    this.globalFeed = new GlobalFeedTab(this.page, userId);
  }
}
