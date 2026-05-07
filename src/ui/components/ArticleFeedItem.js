import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class ArticleFeedItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleTitle = page.getByRole(
      'header', {name: "Article title:"}).first();
    this.articleTitleLink = page.getByRole(
      'link', {name: "Article title:"}).first();
  }

  async clickOnArticle() {
    await this.step(`Click on first article`, async () => {
      await this.articleTitleLink.click();
    })
  }

  async assertArticleTitleContainText(name) {
    await this.step(`Assert first article have ${name} title`, async () => {
      await expect(this.articleTitle).toHaveText(name);
    });
  }

  async assertArticleTitleIsVisible() {
    await this.step(`Assert first article have title`, async () => {
      await expect(this.articleTitle).toBeVisible();
    });
  }
}