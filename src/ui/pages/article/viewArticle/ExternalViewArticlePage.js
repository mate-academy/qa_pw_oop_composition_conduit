import { BaseViewArticlePage } from './BaseViewArticlePage';
import { ArticleContentBlock } from '../../../components/article/ArticleContentBlock';

export class ExternalViewArticlePage extends BaseViewArticlePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleContentExternal = new ArticleContentBlock(this.page, userId);
  }
}
