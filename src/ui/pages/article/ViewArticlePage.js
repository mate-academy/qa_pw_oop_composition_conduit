import { expect } from '../../../common/helpers/pw';
import { BasePage } from '../BasePage';
import { ArticleContentBlock } from '../../components/article/ArticleContentBlock';

export class ViewArticlePage extends BasePage {
  articleId;
  articleContentExternal;

  constructor(page, userId = 0) {
    super(page, userId);
    this.articleContentExternal = new ArticleContentBlock(page, userId);
  }
}
