import { BaseArticleContentBlock } from './BaseArticleContentBlock';
import { expect } from '../../../common/helpers/pw';

export class AuthorArticleContentBlock extends BaseArticleContentBlock {
  constructor(page, userId = 0) {
    super(page, userId);
    this.container = page.locator('form.card.comment-form');
    this.commentField = this.container.locator('textarea.form-control');
    this.submitButton = this.container.locator('button.btn-primary');
  }

  async fillComment(text) {
    await this.step(`Add a comment'`, async () => {
      await this.commentField.fill(text);
    });
  }

  async clickSubmitButton() {
    await this.step(`Click 'Sign In' button from article page'`, async () => {
      await this.submitButton.click();
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
      await expect(this.submitButton).toBeVisible();
    });
  }
}
