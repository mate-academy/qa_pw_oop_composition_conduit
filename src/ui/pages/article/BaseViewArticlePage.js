import { ArticleContentBlock } from '../../components/ArticleContentBlock';
//import { expect } from '../../../common/helpers/pw';
import { BasePage } from '../BasePage';

export class BaseViewArticlePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleContentBlock = new ArticleContentBlock(this.page, userId);
  }
}
