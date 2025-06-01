import { BaseViewArticlePage } from './BaseViewArticlePage';
import { ExternalViewArticleBlock } from '../../../components/article/viewArticleBlock/ExternalViewArticleBlock';

export class ExternalViewArticlePage extends BaseViewArticlePage {
  externalViewArticleBlockViewArticleBlock;

  constructor(page, userId = 0) {
    super(page, userId);
    this.externalViewArticleBlockViewArticleBlock =
      new ExternalViewArticleBlock(this.page, userId);
  }
}
