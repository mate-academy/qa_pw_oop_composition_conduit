import { BasePage } from '../BasePage';
import { ArticleContentBlock } from '../../components/article/ArticleContentBlock';
export class BaseViewArticlePage extends BasePage {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);
    this.articleContentBlock = new ArticleContentBlock(this.page, userId);
  }
}
