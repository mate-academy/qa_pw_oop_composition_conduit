import { expect } from '../../../common/helpers/pw';
import { BaseViewArticlePage } from './BaseViewArticlePage';

export class ExternalViewArticlePage extends BaseViewArticlePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.root = page.locator('div:has-text("Sign in") >> xpath=..');
    this.container = page.locator('.container.page');
    this.signInLink = this.container.locator('a[href="/user/login"]');
    this.signUpLink = this.container.locator('a[href="/user/register"]');
  }

  async authFormIsVisible() {
    await this.step(`Click 'Sign Up' button from article page'`, async () => {
      await expect(this.container).toBeVisible();
      await expect(this.signInLink).toBeVisible();
      await expect(this.signUpLink).toBeVisible();
    });
  }

  async clickSignIn() {
    await this.step(`Click 'Sign In' button from article page'`, async () => {
      await this.signInLink.click();
    });
  }

  async clickSignUp() {
    await this.step(`Click 'Sign Up' button from article page'`, async () => {
      await this.signUpLink.click();
    });
  }
}
