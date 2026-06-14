import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class ArticleFeedItem extends BaseComponent {
  articleCard(title) {
  return this.page.locator('.article-preview').filter({ hasText: title });
}

  articleTitle(title) {
    return this.articleCard(title).locator('h1');
  }

  articleDescription(title) {
    return this.articleCard(title).locator('p');
  }

  articleAuthor(title) {
    return this.articleCard(title).locator('a.author');
  }

  async clickArticleTitle(title) {
    await this.step(`Click article title '${title}'`, async () => {
      await this.articleTitle(title).click();
    });
  }

  async assertArticleTitleIsVisible(title) {
    await this.step(`Assert article title '${title}' is visible`, async () => {
      await expect(this.articleTitle(title)).toContainText(title);
    });
  }

  async assertArticleDescriptionIsVisible(title, description) {
    await this.step(`Assert article description is visible`, async () => {
      await expect(this.articleDescription(title)).toContainText(description);
    });
  }

  async assertArticleAuthorNameIsVisible(title, authorName) {
    await this.step(`Assert article author '${authorName}' is visible`, 
      async () => {
      await expect(this.articleAuthor(title)).toContainText(authorName);
    });
  }
}