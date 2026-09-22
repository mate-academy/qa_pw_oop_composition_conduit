import { BaseHeader } from './BaseHeader';
import { expect } from '../../../common/helpers/pw';

export class ExternalHeader extends BaseHeader {
  #signUpLink;
  #signInLink;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#signUpLink = this._navbar.getByRole('link', { name: 'Sign up' });
    this.#signInLink = this._navbar.getByRole('link', { name: 'Sign in' });
  }

  async clickSignUpLink() {
    await this.step(`Click 'Sign Up' link`, async () => {
      await this.#signUpLink.click();
    });
  }

  async clickSignInLink() {
    await this.step(`Click 'Sign In' link`, async () => {
      await this.#signInLink.click();
    });
  }

  async assertSignUpLinkIsVisible() {
    await this.step(`Assert 'Sign Up' link is visible`, async () => {
      await expect(this.#signUpLink).toBeVisible();
    });
  }

  async assertSignInLinkIsVisible() {
    await this.step(`Assert 'Sign In' link is visible`, async () => {
      await expect(this.#signInLink).toBeVisible();
    });
  }
}
