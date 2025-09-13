import { BaseViewArticlePage } from './BaseViewArticlePage';
import { AuthorsArticleContentBlock } from '../../components/articles/AuthorsArticleContentBlock';

export class InternalViewArticlePage extends BaseViewArticlePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.authorArticle = new AuthorsArticleContentBlock(this.page, userId);
  }
}
