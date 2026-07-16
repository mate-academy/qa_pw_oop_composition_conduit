import { BaseViewArticlePage } from './BaseViewArticlePage';
import { AuthorsArticleContentBlock } from '../../components/articleContent/AuthorsArticleContentBlock';

export class InternalViewArticlePage extends BaseViewArticlePage {

  constructor(page, userId = 0) {
    super(page, userId);
    this.authorArticleContentBlock = new AuthorsArticleContentBlock(page,
      userId);
  }
}
