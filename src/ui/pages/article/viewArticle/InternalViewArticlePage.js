import { BaseViewArticlePage } from './BaseViewArticlePage';
import { InternalViewArticleBlock } from '../../../components/article/viewArticleBlock/InternalViewArticleBlock';

export class InternalViewArticlePage extends BaseViewArticlePage {
  internalViewArticleBlock;

  constructor(page, userId = 0) {
    super(page, userId);
    this.internalViewArticleBlock = new InternalViewArticleBlock(
      this.page,
      userId,
    );
  }
}
