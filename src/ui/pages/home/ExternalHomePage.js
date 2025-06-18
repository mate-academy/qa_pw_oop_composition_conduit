import { BaseHomePage } from './BaseHomePage';
import { ExternalHeader } from '../../components/header/ExternalHeader';
import { GlobalFeedTab } from '../../components/feed/GlobalFeedTab';
import { TagFeedTab } from '../../components/feed/TagFeedTab';

export class ExternalHomePage extends BaseHomePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.header = new ExternalHeader(this.page, userId);
    this.globalFeedTab = new GlobalFeedTab(this.page, userId);
    this.tagFeedTab = new TagFeedTab(this.page, userId);
  }
}
