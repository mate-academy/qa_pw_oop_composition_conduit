import { BaseViewArticlePage } from './BaseViewArticlePage';
import { AuthorArticleContentBlock } from '../../components/AuthorArticleContentBlock';

export class InternalViewArticlePage extends BaseViewArticlePage {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);
    this.authorArticleContent = new AuthorArticleContentBlock(
      this.page,
      userId,
    );
  }
}
