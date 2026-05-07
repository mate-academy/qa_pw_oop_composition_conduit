import { BaseViewArticlePage } from './BaseViewArticlePage.js';
import { AuthorsArticleContentBlock } from '../../components/AuthorsArticleContentBlock.js';
import { InternalHeader } from '../../components/header/InternalHeader.js';

export class InternalViewArticlePage extends BaseViewArticlePage {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);
    this.authorsArticleContentBlock = new AuthorsArticleContentBlock(
      page, userId);
    this.internalHeader = new InternalHeader(page, userId);
  }
}
