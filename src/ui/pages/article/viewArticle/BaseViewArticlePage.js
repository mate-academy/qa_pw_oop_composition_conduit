import { BasePage } from '../../BasePage';

export class BaseViewArticlePage extends BasePage {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);
  }
}
