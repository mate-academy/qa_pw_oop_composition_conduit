import { BaseComponent } from '../BaseComponent';

export class BaseHeader extends BaseComponent {
  #homeLink;
  #conduitLogo;

  constructor(page, userId = 0) {
    super(page, userId);
    // Scoped to the navbar: an anonymous article page also carries a
    // 'Sign in or sign up to add comments' prompt with the same link names.
    this._navbar = this.page.getByRole('navigation');
    this.#conduitLogo = this._navbar.getByRole('link', { name: 'Conduit' });
    this.#homeLink = this._navbar.getByRole('link', { name: 'Home' });
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
}
