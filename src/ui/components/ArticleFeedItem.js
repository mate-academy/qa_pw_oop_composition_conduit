import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class ArticleFeedItem extends BaseComponent {
  #card;
  #titleLink;

  // Supports:
  // (page, title, userId?)  OR  (page, previewsLocator, title, userId?)
  constructor(page, arg2, arg3, arg4) {
    let previews;
    let title;
    let userId;

    if (typeof arg2 === 'string') {
      // (page, title, userId?)
      title = arg2;
      userId = arg3 ?? 0;
      previews = page.locator('.article-preview');
    } else {
      // (page, previewsLocator, title, userId?)
      previews = arg2 ?? page.locator('.article-preview');
      title = arg3;
      userId = arg4 ?? 0;
    }

    super(page, userId);

    // Get the specific title link and the card that contains it.
    this.#titleLink = this.page.getByRole('link', { name: title });
    this.#card = previews.filter({ has: this.#titleLink });
  }

  async assertVisible() {
    await this.step("Assert article is visible in feed", async () => {
      await expect(this.#card).toBeVisible();
    });
  }

  // The method now correctly clicks on the title link.
  async open() {
    await this.step(`Open article 
      '${await this.#titleLink.textContent()}'`, async () => {
      await expect(this.#titleLink).toBeEnabled();
      await this.#titleLink.click();
    });
  }
}