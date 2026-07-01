import{ BaseArticleContentBlock } from "./BaseArticleContentBlock.js";
import { expect, test } from '@playwright/test';

export class AuthorsArticleContentBlock extends BaseArticleContentBlock{
 constructor(page, userId = 0) {
    super(page, userId);
    this.articleTitleHeader = page.getByRole('heading');
 }

 async assertArticleTitleIsVisible(title) {
    await this.step(`Assert the article has correct title`, async () => {
      await expect(this.articleTitleHeader).toContainText(title);
    });
  }

  async assertArticleTextIsVisible(text) {
    await this.step(`Assert the article has correct text`, async () => {
      await expect(this.page.getByText(text)).toBeVisible();
    });
  }

  // async assertArticleTagsAreVisible(tags) {
  //   await this.step(`Assert the article has correct tags`, async () => {
  //     for (let i = 0; i < tags.length; i++) {
  //       await expect(this.page.getByRole('listitem').filter({ hasText: tags[i] })).toBeVisible();
  //     }
  //   });
  // }

  async assertArticleAuthorNameIsVisible(username) {
  await this.step(
    `Assert the article has correct author`,
    async () => {
      await expect(this.authorLinkInArticleHeader(username)).toBeVisible();
    },
  );
}


}