import { BaseHomePage } from './BaseHomePage';
// import { BaseViewArticlePage } from './BaseViewArticlePage';
import { ExternalHeader } from '../../components/header/ExternalHeader';
import { TagFeed } from '../../components/TagFeed';

export class ExternalHomePage extends BaseHomePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.header = new ExternalHeader(this.page, userId);
    this.tagFeed = new TagFeed(page);
    // this.baseViewArticlePage = new BaseViewArticlePage(page);
  }
}
