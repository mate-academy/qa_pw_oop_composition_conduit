import { BaseViewArticlePage } from './BaseViewArticlePage';
import { AuthorsArticleContentBlock } from '../../components/article/AuthorsArticleContentBlock';

export class InternalViewArticlePage extends BaseViewArticlePage {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);
    this.authorsArticleContentBlock = new AuthorsArticleContentBlock(
      page,
      userId,
    );
  }
}
