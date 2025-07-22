import { BaseHomePage } from './BaseHomePage';
import { InternalHeader } from '../../components/header/InternalHeader';
import { YourFeedTab } from '../../components/YourFeedTab';
import { TagFeed } from '../../components/TagFeed';
// import { BaseViewArticlePage } from './BaseViewArticlePage';

export class InternalHomePage extends BaseHomePage {
  constructor(page, userId = 0) {
    super(page, userId);

    this.header = new InternalHeader(this.page, userId);
    this.yourFeed = new YourFeedTab(this.page, userId);
    this.tagFeed = new TagFeed(page);
    // this.baseViewArticlePage = new BaseViewArticlePage(page);
  }
}
