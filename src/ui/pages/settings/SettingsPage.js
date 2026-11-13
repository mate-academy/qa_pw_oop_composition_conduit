import { BasePage } from '../BasePage';

export class SettingsPage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this._url = '/settings';
    this.logOutButton = this.page.getByRole('button', {
      name: 'Or click here to logout',
    });
  }

  async clickLogOutButton() {
    await this.step(`Click LogOut button`, async () => {
      await this.logOutButton.click();
    });
  }
}
