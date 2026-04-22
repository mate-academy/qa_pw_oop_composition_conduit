import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw'

export class ArticleFeedItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
  }

  articleItem(title) {
    return this.page.locator('.article-preview').filter({ hasText: title });
  }

  articleTitle(title) {
    return this.articleItem(title)
      .getByRole("link", { name: title });
  }

  articleAuthor(title, author) {
    return this.articleItem(title)
      .filter({ hasText: author });
  }

  articleText(title, text) {
    return this.articleItem(title)
      .filter({ hasText: text });
  }

  async clickOnArticleTitle(title) {
    await this.step('Click on the article title', async () => {
      await this.articleTitle(title).click();
    })
  }

  async assertArticleTitleIsVisible(title) {
    await this.step('Assert article title is visible in feed', async () => {
      await expect(this.articleTitle(title)).toBeVisible();
    })
  }

  async assertArticleAuthorNameIsVisible(title, author) {
    await this.step('Assert author name is visible in feed', async () => {
      await expect(this.articleAuthor(title, author)).toBeVisible();
    });
  }

  async assertArticleTextIsVisible(title, text) {
    await this.step('Assert article text is visible in feed', async () => {
      await expect(this.articleText(title, text)).toBeVisible();
    });
  }
}