import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';
import { ArticleFeedItem } from './ArticleFeedItem';

export class TagFeedTab extends BaseComponent {
  #articleFeedItem;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#articleFeedItem = new ArticleFeedItem(page, userId);
  }

  getTagFeedLink(tagName) {
    return this.page.locator('.feed-toggle .nav-link.active', {
      hasText: tagName,
    });
  }

  async assertTabLinkVisible(tagName) {
    await this.step(`Assert 'Tag Feed' link is visible`, async () => {
      await expect(this.getTagFeedLink(tagName)).toBeVisible();
    });
  }
  async assertArticleTitleIsVisible(title) {
    await this.#articleFeedItem.assertArticleTitleIsVisible(title);
  }

  async assertArticleDescriptionIsVisible(title, description) {
    await this.#articleFeedItem
      .assertArticleDescriptionIsVisible(title, description);
  }

  async assertArticleAuthorNameIsVisible(title, authorName) {
    await this.#articleFeedItem
      .assertArticleAuthorNameIsVisible(title, authorName);
  }
}
