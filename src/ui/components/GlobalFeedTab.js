import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';
import { ArticleListItem } from './ArticleListItem.component.js';

export class GlobalFeedTab extends BaseComponent {
  #globalFeedLink;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#globalFeedLink = this.page.getByText('Global Feed');
    this.articleListItem = new ArticleListItem(this.page, userId);
    this.createdArticleTitle = page.getByRole('heading');
  }

  async open() {
    await this.step(`Open 'Global Feed' tab`, async () => {
      await this.#globalFeedLink.click();
    });
  }

  async assertTabLinkVisible() {
    await this.step(`Assert 'Global Feed' link is visible`, async () => {
      await expect(this.#globalFeedLink).toBeVisible();
    });
  }

  /*async assertCreatedArticleTitleIsHere(title) {
    await this.step(`Assert created article title is visible`, async () => {
      await this.articleListItem.assertArticleTitleIsVisible(title);
    });
  } */

  async assertCreatedArticleTitle(expectedTitle) {
    await this.step(
      `Assert article with title "${expectedTitle}" is visible`,
      async () => {
        // Используем локатор с фильтрацией по тексту
        const titleLocator = this.createdArticleTitle.getByText(expectedTitle);

        // Проверяем что заголовок существует и видим
        await expect(titleLocator).toBeVisible({
          timeout: 3000,
          message: `Article with title "${expectedTitle}" not found or not visible`,
        });
      },
    );
  }
}
