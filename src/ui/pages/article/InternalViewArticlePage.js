import { BaseViewArticlePage } from './BaseViewArticlePage';
import { InternalHeader } from '../../components/header/InternalHeader';
import { AuthorsArticleContentBlock } from '../../components/AuthorsArticleContentBlock';

export class InternalViewArticlePage extends BaseViewArticlePage {
  constructor(page, userId = 0) {
    super(page, userId);

    this.header = new InternalHeader(page, userId);
    this.authorsArticleContent = new AuthorsArticleContentBlock(page, userId);
  }
}
