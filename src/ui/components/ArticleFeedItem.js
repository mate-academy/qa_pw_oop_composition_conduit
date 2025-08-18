import { BaseComponent } from "./BaseComponent";
import { expect } from "allure-playwright";


export class ArticleFeedItem extends BaseComponent {

  constructor(page, userId = 0) {
    super(page, userId);

    this.articleFeedItems = this
      .page
      .locator('.article-preview')
      .filter({has: this.page.getByAltText('author profile image')});
  }

  async openArticlePage(title) {
    await this.step(`Open article with title ${title}`, async () => {
      const article = await this.getArticleTitleElement(title, 10);
      await article.click();
    })
  }

  async getAuthorArticleElementByName(authorName, searchTryCount) {
    for (let index = 0; index <= searchTryCount; index++) {

      for (const article of await this.articleFeedItems.all()) {
        try {
          await article.getByRole('link').nth(1).innerText() === authorName;
          return article;
        } catch {
          this.page.reload();
        }
      }
    } 
    throw Error(`Article by author "${authorName}" not found`);
  }

  async getArticleTitleElement(articleTitle, searchTryCount) {
    
    for (let index = 0; index <= searchTryCount; index++) {
      try {
        const article = this.page.getByRole('link', { name: articleTitle });
        await expect(article).toBeVisible({ timeout: 1500 });
        return article;
       } catch {
        this.page.reload();
      }
    }
    throw Error(`Article by tittle "${articleTitle}" not found`);
  }

  async assertArticleCreatedByAuthorIsVisible(author) {
    await this.step(
      `Assert created by ${author} article is visible.`, 
      async () => {
        const article = await this.getAuthorArticleElementByName(author, 10);
        await expect(article).toBeVisible();
    }); 
  }
}