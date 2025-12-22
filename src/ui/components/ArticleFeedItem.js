import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class ArticleFeedItem extends BaseComponent {
  constructor(page, articleLocator) {
    super(page);
    this.article = articleLocator; // root locator komponentu
  }

  async open() {
    await this.article.click();
  }

  async assertVisible() {
    await expect(this.article).toBeVisible();
  }

  async getTitle() {
    return await this.article.textContent();
  }
}
