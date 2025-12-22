export class ArticleFeedItem {
  constructor(articleLocator) {
    this.article = articleLocator;

    this.title = this.article.locator('h1');
    this.description = this.article.locator('.preview-link p');
    this.author = this.article.locator('.author');
    this.tags = this.article.locator('.tag-list li');
    this.previewLink = this.article.locator('.preview-link');
  }

  async getTitle() {
    return await this.title.textContent();
  }

  async getDescription() {
    return await this.description.textContent();
  }

  async getAuthor() {
    return await this.author.textContent();
  }

  async getTags() {
    return await this.tags.allTextContents();
  }

  async open() {
    await this.previewLink.click();
  }
}
