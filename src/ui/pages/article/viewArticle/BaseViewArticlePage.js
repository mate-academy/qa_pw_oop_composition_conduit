import { BasePage } from '../../BasePage';
import { ArticleContentBlock } from '../../../components/article/ArticleContentBlock';

export class BaseViewArticlePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
  }
}
