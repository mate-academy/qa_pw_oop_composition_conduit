export class BaseArticleContentBlock {
  constructor(page) {
    this.page = page;

    this.titleLocator = page.locator('h1');
    this.contentLocator = page.locator('.article-content');
    this.authorLocator = page.locator('.author');
    this.tagsLocator = page.locator('.tag-list li');
  }

  async getTitle() {
    return await this.titleLocator.textContent();
  }

  async getContent() {
    return await this.contentLocator.textContent();
  }

  async getAuthor() {
    return await this.authorLocator.textContent();
  }

  async getTags() {
    return await this.tagsLocator.allTextContents();
  }
}
