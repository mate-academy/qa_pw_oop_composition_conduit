const { BaseComponent } = require('./BaseComponent');
const { expect } = require('../../common/helpers/pw');

export class ArticleFeedItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articlesList = page.locator('.article-preview');
  }

  _getArticleByAuthor(authorName, index = 0) {
    return this.articlesList
      .filter({ has: this.page.locator('.author', { hasText: authorName }) })
      .nth(index);
  }

  async _getArticleElement(authorName, selector = null, index = 0) {
    const article = this._getArticleByAuthor(authorName, index);
    return selector ? article.locator(selector) : article;
  }

  async assertArticleVisible(authorName, maxRetries = 5) {
    await this.step(
      `Article by author "${authorName}" is visible`,
      async () => {
        let attempt = 0;

        while (attempt < maxRetries) {
          const article = this._getArticleByAuthor(authorName);
          try {
            await expect(article).toBeVisible({ timeout: 5000 });
            return;
          } catch (err) {
            attempt++;
            if (attempt >= maxRetries) throw err;
            await this.page.reload();
          }
        }
      },
    );
  }

  async clickOnAuthorArticle(authorName, index = 0) {
    await this.step(`Click on Article by "${authorName}"`, async () => {
      const article = this._getArticleByAuthor(authorName, index);
      await article.click();
    });
  }

  async assertArticleTitleContainsText(authorName, title, index = 0) {
    await this.step(`Article 'Title' is shown`, async () => {
      const titleElement = await this._getArticleElement(
        authorName,
        'h1',
        index,
      );
      await expect(titleElement).toContainText(title);
    });
  }

  async assertArticleDescriptionContainsText(
    authorName,
    description,
    index = 0,
  ) {
    await this.step(`Article 'Description' is shown`, async () => {
      const descElement = await this._getArticleElement(authorName, 'p', index);
      await expect(descElement).toContainText(description);
    });
  }

  async assertArticleTagsAreCorrect(authorName, tags = [], index = 0) {
    const article = this._getArticleByAuthor(authorName, index);

    if (tags.length > 0) {
      await this.step(`Article 'Tags' are shown`, async () => {
        const actualTags = (
          await article.locator('ul.tag-list > li').allTextContents()
        )
          .map(t => t.trim())
          .filter(Boolean);
        expect(actualTags.sort()).toEqual(tags.sort());
      });
    } else {
      await this.step(`Article 'Tags' are missed`, async () => {
        await expect(article.locator('ul.tag-list')).toBeHidden();
      });
    }
  }
}
