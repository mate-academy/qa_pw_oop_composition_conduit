import { testStep, expect } from '../../common/helpers/pw';

export class BasePage {
  _url;

  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  pageName() {
    return this.constructor.name.replace('Page', '');
  }

  url() {
    if (this._url) {
      return this._url;
    } else {
      throw Error(`The property '_url' must be implemented`);
    }
  }

  async open(directUrl = undefined) {
    await this.step(`Open ${this.pageName()} page`, async () => {
      const url = directUrl ? directUrl : this.url();
      await this.page.goto(url);
    });
  }

  getCurrentPageUrl() {
    return this.page.url();
  }

  async assertOpened() {
    await this.step(`Assert ${this.pageName()} page is opened`, async () => {
      await this.page.waitForURL(this.url());
      await expect(this.page).toHaveURL(this.url());
    });
  }
}
