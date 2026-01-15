import { BaseHomePage } from './BaseHomePage';
import { ExternalHeader } from '../../components/header/ExternalHeader';
import { TagFeed } from '../../components/TagFeed.component.js';
import { GlobalFeedTab } from '../../components/GlobalFeedTab.js';
import { ArticleListItem } from '../../components/ArticleListItem.component.js';

export class ExternalHomePage extends BaseHomePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.header = new ExternalHeader(this.page, userId);
    this.tagFeed = new TagFeed(this.page, userId);
    this.globalFeedTab = new GlobalFeedTab(this.page, userId);
    this.articleListItem = new ArticleListItem(this.page, userId);
  }
}
