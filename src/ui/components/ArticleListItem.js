import { expect } from 'allure-playwright';
import { BaseComponent } from './BaseComponent';

export class ArticleListItem extends BaseComponent {
  constructor(page) {
    super(page);
    this.articleList = this.page.getByRole('link', {
      name: 'Article title: consequuntur-',
    });
  }

  async assertGlobalListArticlesIsVisible() {
    await this.step(`Assert 'Global article list' is visible`, async () => {
      await expect(this.articleList).toBeVisible();
    });
  }
}
