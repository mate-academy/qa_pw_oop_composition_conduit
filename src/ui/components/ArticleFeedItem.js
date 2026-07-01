
import{ BaseComponent } from "./BaseComponent.js";
import { expect } from '@playwright/test';

export class ArticleFeedItem extends BaseComponent{
 constructor(page, userId = 0) {
    super(page, userId);
 }

 articlePreview(title) {
   return this.page
    .locator('.article-preview')
    .filter({ has: this.page.locator('h1', { hasText: title }) })
    .first();
 }

 openArticleLink(title) {
   return this.articlePreview(title).locator('.preview-link').first();
 }

 async openArticle(title) {
    await this.step(`Open article '${title}' from feed`, async () => {
      await this.openArticleLink(title).click();
    });
 }

 async assertArticleTitleIsVisible(title) {
    await this.step(`Assert article title '${title}' is visible`, async () => {
      await expect(this.articlePreview(title)).toBeVisible();
    });
 }

 async assertArticleAuthorNameIsVisible(authorName) {
    await this.step(
      `Assert article author '${authorName}' is visible`,
      async () => {
        await expect(
          this.page.getByRole('link', { name: authorName }).first(),
        ).toBeVisible();
      },
    );
 }
}