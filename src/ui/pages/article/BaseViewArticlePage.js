import { BasePage } from '../BasePage';
import { ArticleContentBlock } from '../../components/article/ArticleContentBlock';

export class BaseViewArticlePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this._url = /\/article\//;
    this.articleContentBlock = new ArticleContentBlock(this.page, userId);
  }

  url() {
    return this._url;
  }
}
