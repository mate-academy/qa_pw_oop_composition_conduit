import { BaseViewArticlePage } from './BaseViewArticlePage';
import { InternalViewArticleBlock } from '../../components/InternalViewArticleBlock.component.js';
import { InternalHeader } from '../../components/header/InternalHeader';

export class InternalViewArticlePage extends BaseViewArticlePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this._url = '/article/';
    this.internalViewArticleBlock = new InternalViewArticleBlock(
      this.page,
      userId,
    );
    this.internalHeader = new InternalHeader(this.page, userId);
  }
}
