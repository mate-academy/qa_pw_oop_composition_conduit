import { test as base } from '@playwright/test';
import { InternalHomePage } from '../../src/ui/pages/home/InternalHomePage';
import { ExternalHomePage } from '../../src/ui/pages/home/ExternalHomePage';
import { BaseHomePage } from '../../src/ui/pages/home/BaseHomePage';
import { BasePage } from '../../src/ui/pages/BasePage';

export const test = base.extend<{
  internalHomePage;
  externalHomePage;
  baseHomePage;
  basePage;
}>({
  internalHomePage: async ({ page }, use) => {
    const homePage = new InternalHomePage(page);

    await use(homePage);
  },
  externalHomePage: async ({ page }, use) => {
    const homePage = new ExternalHomePage(page);

    await use(homePage);
  },
  baseHomePage: async ({ page }, use) => {
    const baseHomePage = new BaseHomePage(page);

    await use(baseHomePage);
  },
  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);

    await use(basePage);
  }
});
