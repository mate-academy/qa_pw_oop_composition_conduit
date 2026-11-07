import { BaseHomePage } from './BaseHomePage';
import { ExternalHeader } from '../../components/header/ExternalHeader';
import { GlobalFeedTab } from '../../components/GlobalFeedTab';
import { TagFeedTab } from '../../components/TagFeedTab';

export class ExternalHomePage extends BaseHomePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.header = new ExternalHeader(this.page, userId);
    this.globalFeed = new GlobalFeedTab(this.page, userId);
    this.tagFeed = new TagFeedTab(this.page, userId);
  }
}
