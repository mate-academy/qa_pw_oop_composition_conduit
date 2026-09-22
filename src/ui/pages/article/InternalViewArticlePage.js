import { BaseViewArticlePage } from './BaseViewArticlePage';
import { AuthorArticleContentBlock } from '../../components/article/AuthorArticleContentBlock';

export class InternalViewArticlePage extends BaseViewArticlePage {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);

    this.authorArticleContentBlock = new AuthorArticleContentBlock(
      page,
      userId,
    );
  }
}
