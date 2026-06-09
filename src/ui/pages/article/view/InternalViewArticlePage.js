import { AuthorsArticleContentBlock } from '../../../components/articleContent/AuthorsArticleContentBlock';
import { BaseViewArticlePage } from './BaseViewArticlePage';

export class InternalViewArticlePage extends BaseViewArticlePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.authorsArticleContentBlock = new AuthorsArticleContentBlock(
      page,
      userId,
    );
  }
}
