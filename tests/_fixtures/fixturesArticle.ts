import { test as base } from '@playwright/test';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';
import { BaseViewArticlePage } from '../../src/ui/pages/article/BaseViewArticlePage';
import { EditArticlePage } from '../../src/ui/pages/article/EditArticlePage';
import { ExternalViewArticlePage } from '../../src/ui/pages/article/ExternalViewArticlePage';
import { InternalViewArticlePage } from '../../src/ui/pages/article/InternalViewArticlePage';

export const test = base.extend<{
  articleWithoutTags;
  articleWithOneTag;
  createArticlePage;
  baseViewArticlePage;
  editArticlePage;
  externalViewArticlePage;
  internalViewArticlePage;
}>({
  articleWithoutTags: async ({ logger }, use) => {
    const article = generateNewArticleData(logger);

    await use(article);
  },
  articleWithOneTag: async ({ logger }, use) => {
    const article = generateNewArticleData(logger, 1);

    await use(article);
  },
  createArticlePage: async ({ page }, use) => {
    const createArticlePage = new CreateArticlePage(page);

    await use(createArticlePage);
  },
  baseViewArticlePage: async ({ page }, use) => {
    const baseViewArticlePage = new BaseViewArticlePage(page);

    await use(baseViewArticlePage);
  },

  editArticlePage: async ({ page }, use) => {
    const editArticlePage = new EditArticlePage(page);

    await use(editArticlePage);
  },

  externalViewArticlePage: async ({ page }, use) => {
    const externalViewArticlePage = new ExternalViewArticlePage(page);

    await use(externalViewArticlePage);
  },

  internalViewArticlePage: async ({ page }, use) => {
    const internalViewArticlePage = new InternalViewArticlePage(page);

    await use(internalViewArticlePage);
  },
});
