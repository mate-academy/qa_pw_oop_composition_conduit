import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class ArticleFeedItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
  }

  articleItem(articleTitle) {
    return this.page
      .locator('.article-preview')
      .filter({ hasText: articleTitle });
  }

  authorLink(articleTitle, username) {
    return this.articleItem(articleTitle).getByRole('link', { name: username });
  }

  favoriteButton(articleTitle) {
    return this.articleItem(articleTitle).getByRole('button');
  }

  tagListItem(articleTitle, tagName) {
    return this.articleItem(articleTitle)
      .getByRole('listitem')
      .filter({ hasText: tagName });
  }

  async clickArticleTitle(articleTitle) {
    await this.step(`Click '${articleTitle}' article title`, async () => {
      await this.articleItem(articleTitle).getByRole('heading').click();
    });
  }

  async clickFavoriteButton(articleTitle) {
    await this.step(
      `Click favorite button on '${articleTitle}' article`,
      async () => {
        await this.favoriteButton(articleTitle).click();
      },
    );
  }

  async assertArticleVisible(articleTitle) {
    await this.step(
      `Assert '${articleTitle}' article is visible in the feed`,
      async () => {
        await expect(this.articleItem(articleTitle)).toBeVisible();
      },
    );
  }

  async assertAuthorVisible(articleTitle, username) {
    await this.step(
      `Assert '${articleTitle}' article author is '${username}'`,
      async () => {
        await expect(this.authorLink(articleTitle, username)).toBeVisible();
      },
    );
  }

  async assertTagVisible(articleTitle, tagName) {
    await this.step(
      `Assert '${articleTitle}' article has tag '${tagName}'`,
      async () => {
        await expect(this.tagListItem(articleTitle, tagName)).toBeVisible();
      },
    );
  }
}
