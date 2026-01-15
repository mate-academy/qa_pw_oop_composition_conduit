import { testStep } from '../../common/helpers/pw';

export class BaseComponent {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async expectLoaded(locator) {
    await this.step(`Expect ${locator} to be loaded`, async () => {
      await locator.waitFor({ state: 'visible' });
    });
  }
}
