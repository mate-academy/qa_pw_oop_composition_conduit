import { BaseComponent } from '../BaseComponent';

export class BaseHeader extends BaseComponent {
  #homeLink;
  #conduitLogo;
  #settings;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#conduitLogo = this.page.getByRole('link', { name: 'Conduit' }).first();
    this.#homeLink = this.page.getByRole('link', { name: 'Home' });
    this.#settings = this.page.getByRole('link', { name: '  Settings' });
  }

  async clickConduitLogo() {
    await this.step(`Click 'Conduit' logo in the page header`, async () => {
      await this.#conduitLogo.click();
    });
  }

  async clickHomeLink() {
    await this.step(`Click 'Home' link in the page header`, async () => {
      await this.#homeLink.click();
    });
  }

  async clickSettingsLink() {
    await this.step(`Click 'Settings' link in the page header`, async () => {
      await this.#settings.click();
    });
  }
}
