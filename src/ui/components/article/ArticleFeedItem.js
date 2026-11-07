import { BaseComponent } from '../BaseComponent';
import { expect } from '../../../common/helpers/pw';

export class ArticleFeedItem extends BaseComponent {
  #headingName(title) {
    return `Article title: ${title}`;
  }

  #preview(title) {
    return this.page.locator('.article-preview').filter({
      has: this.page.getByRole('heading', {
        name: this.#headingName(title),
        exact: true,
      }),
    });
  }

  #title(title) {
    return this.#preview(title).getByRole('heading', {
      name: this.#headingName(title),
      exact: true,
    });
  }

  #description(title) {
    return this.#preview(title).getByRole('paragraph');
  }

  #author(title, username) {
    return this.#preview(title).getByRole('link', {
      name: username,
      exact: true,
    });
  }

  #date(title) {
    return this.#preview(title).locator('.date');
  }

  #favoriteButton(title) {
    return this.#preview(title).getByRole('button');
  }

  #tag(title, tagName) {
    return this.#preview(title)
      .locator('.tag-list')
      .getByText(tagName, { exact: true });
  }

  async clickTitle(title) {
    await this.step(`Click '${title}' article title`, async () => {
      await this.#title(title).click();
    });
  }

  async assertArticleTitleIsVisible(title) {
    await this.step(
      `Assert the article '${title}' title is visible`,
      async () => {
        await expect(this.#title(title)).toBeVisible();
      },
    );
  }

  async assertArticleDescriptionIsVisible(title, description) {
    await this.step(
      `Assert the article '${title}' description is visible`,
      async () => {
        await expect(this.#description(title)).toHaveText(
          `Article description: ${description}`,
        );
      },
    );
  }

  async assertArticleAuthorNameIsVisible(title, username) {
    await this.step(
      `Assert the article '${title}' author is visible`,
      async () => {
        await expect(this.#author(title, username)).toBeVisible();
      },
    );
  }

  async assertArticleDateIsVisible(title) {
    await this.step(
      `Assert the article '${title}' date is visible`,
      async () => {
        await expect(this.#date(title)).toBeVisible();
      },
    );
  }

  async assertArticleTagsAreVisible(title, tags) {
    await this.step(
      `Assert the article '${title}' tags are visible`,
      async () => {
        for (let i = 0; i < tags.length; i++) {
          await expect(this.#tag(title, tags[i])).toBeVisible();
        }
      },
    );
  }

  async assertFavoriteCount(title, count) {
    await this.step(
      `Assert the article '${title}' favorite count is ${count}`,
      async () => {
        await expect(this.#favoriteButton(title)).toContainText(String(count));
      },
    );
  }
}
