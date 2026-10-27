import { BaseViewArticlePage } from './BaseViewArticlePage';

export class ExternalViewArticlePage extends BaseViewArticlePage {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);
    this.articleTitleHeader = page.getByRole('heading');
  }
}
