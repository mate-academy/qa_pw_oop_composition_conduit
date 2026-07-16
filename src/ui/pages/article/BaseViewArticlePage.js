import { BasePage } from '../BasePage';
import { ArticleContentBlock } from '../../components/articleContent/ArticleContentBlock';

export class BaseViewArticlePage extends BasePage {

  constructor(page, userId = 0) {
    super(page, userId);
    this.articleContentBlock = new ArticleContentBlock(page, userId);
  }
}
