import { BaseViewArticlePage } from './BaseViewArticlePage';
import { ExternalViewArticleBlock } from '../../components/ExternalViewArticleBlock.component.js';

export class ExternalViewArticlePage extends BaseViewArticlePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this._url = '/article/';
    this.externalViewArticleBlock = new ExternalViewArticleBlock(
      this.page,
      userId,
    );
  }
}
