import { BaseArticleContentBlock } from './BaseArticleContentBlock';
import { expect } from '../../../common/helpers/pw';

export class AuthorArticleContentBlock extends BaseArticleContentBlock {
  constructor(page, userId = 0) {
    super(page, userId);
    this.container = page.locator('form.card.comment-form');
    this.commentField = this.container.locator('textarea.form-control');
    this.postCommentButton = page.getByRole('button', { name: /Post Comment/ });
    this.editArticleButton = page
      .getByRole('link', { name: /Edit Article/ })
      .nth(1);
    this.deleteArticleButton = page
      .getByRole('link', { name: /Delete Article/ })
      .nth(1);
  }

  async fillComment(text) {
    await this.step(`Add a comment`, async () => {
      await this.commentField.fill(text);
    });
  }

  async clickPostCommentButton() {
    await this.step(`Click 'Post Comment' button`, async () => {
      await this.postCommentButton.click();
    });
  }

  async submitComment(text) {
    await this.step(`Submit comment for article`, async () => {
      await this.fillComment(text);
      await this.clickSubmitButton();
    });
  }

  async AssertCommentSectionIsVisible() {
    await this.step(`Comment section is visible`, async () => {
      await expect(this.container).toBeVisible();
      await expect(this.commentField).toBeVisible();
      await expect(this.postCommentButton).toBeVisible();
    });
  }

  async clickEditArticleButton() {
    await this.step(`Click 'Edit Article' button`, async () => {
      await this.editArticleButton.click();
    });
  }

  async clickDeleteArticleButton() {
    await this.step(`Click 'Edit Article' button`, async () => {
      await this.deleteArticleButton.click();
    });
  }
}
