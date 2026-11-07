import { BaseViewArticlePage } from './BaseViewArticlePage';
import { InternalHeader } from '../../components/header/InternalHeader';
import { AuthorsArticleContentBlock } from '../../components/article/AuthorsArticleContentBlock';

export class InternalViewArticlePage extends BaseViewArticlePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.header = new InternalHeader(this.page, userId);
    this.authorArticleContent = new AuthorsArticleContentBlock(
      this.page,
      userId,
    );
  }
}
