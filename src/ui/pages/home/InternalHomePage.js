import { BaseHomePage } from './BaseHomePage';
import { InternalHeader } from '../../components/header/InternalHeader';
import { YourFeedTab } from '../../components/feed/YourFeedTab';
import { GlobalFeedTab } from '../../components/feed/GlobalFeedTab';
import { PopularTags } from '../../components/PopularTags';
import { TagFeedTab } from '../../components/feed/TagFeedTab';

export class InternalHomePage extends BaseHomePage {
  constructor(page, userId = 0) {
    super(page, userId);

    this.header = new InternalHeader(this.page, userId);
    this.yourFeed = new YourFeedTab(this.page, userId);
    this.globalFeedTab = new GlobalFeedTab(this.page, userId); 
    this.tagFeedTab = new TagFeedTab(this.page, userId);
  }
}
