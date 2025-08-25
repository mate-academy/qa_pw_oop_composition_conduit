import { BasePage } from '../BasePage';
import { InternalHeader } from '../../components/header/InternalHeader';
import { AuthorsArticleContentBlock } from '../../components/article/AuthorsArticleContentBlock';

export class EditArticlePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.header = new InternalHeader(this.page, userId);
  }
}
