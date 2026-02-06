import { BaseViewArticlePage } from './BaseViewArticlePage';
import { AuthorArticleContentBlock } from '../../components/article/AuthorArticleContentBlock';

export class InternalViewArticlePage extends BaseViewArticlePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleContentBlock = new AuthorArticleContentBlock(
      this.page,
      userId,
    );
  }
}
