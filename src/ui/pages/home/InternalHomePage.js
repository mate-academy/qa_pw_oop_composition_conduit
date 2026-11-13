import { BaseHomePage } from './BaseHomePage';
import { InternalHeader } from '../../components/header/InternalHeader';
import { YourFeedTab } from '../../components/YourFeedTab';
import { TagFeedTab } from '../../components/TagFeedTab';
import { GlobalFeedTab } from '../../components/GlobalFeedTab';

export class InternalHomePage extends BaseHomePage {
  constructor(page, userId = 0) {
    super(page, userId);

    this.header = new InternalHeader(this.page, userId);
    this.yourFeed = new YourFeedTab(this.page, userId);
    this.tagFeed = new TagFeedTab(this.page, userId);
    this.globalFeed = new GlobalFeedTab(this.page, userId);
  }
}
