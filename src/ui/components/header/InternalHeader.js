import { BaseHeader } from './BaseHeader';

export class InternalHeader extends BaseHeader {
  #newArticleLink;
  #settingsLink;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#newArticleLink = this.page.getByRole('link', { name: 'New Article' });
    this.#settingsLink = this.page.getByRole('link', { name: 'Sign in' });
    this.homeLink = this.page.getByRole('link', { name: 'Home' });
  }

  #profileLink(profileId) {
    return this.page.getByRole('link', { name: profileId });
  }

  async clickNewArticleLink() {
    await this.step(`Click 'New Article' link`, async () => {
      await this.#newArticleLink.click();
    });
  }

  async clickSettingsLink() {
    await this.step(`Click 'Settings' link`, async () => {
      await this.#settingsLink.click();
    });
  }

  async clickUserProfileLink(profileId) {
    await this.step(`Click user profile link`, async () => {
      await this.#profileLink(profileId).click();
    });
  }

  async clickHomeLink() {
    await this.step(`Click 'Home' link`, async () => {
      await this.homeLink.click();
    });
  }
}
