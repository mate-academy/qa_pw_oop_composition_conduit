import { test as base } from '@playwright/test';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';
import { InternalViewArticlePage } from '../../src/ui/pages/article/InternalViewArticlePage';
import { ExternalViewArticlePage } from '../../src/ui/pages/article/ExternalViewArticlePage';

export const test = base.extend<{
  articleWithoutTags;
  articleWithOneTag;
  createArticlePage;
  internalViewArticlePage;
  externalViewArticlePage;
}>({
  articleWithoutTags: async ({ logger }, use) => {
    await use(generateNewArticleData(logger));
  },

  articleWithOneTag: async ({ logger }, use) => {
    await use(generateNewArticleData(logger, 1));
  },

  createArticlePage: async ({ page }, use) => {
    await use(new CreateArticlePage(page));
  },

  internalViewArticlePage: async ({ page }, use) => {
    await use(new InternalViewArticlePage(page));
  },

  externalViewArticlePage: async ({ page }, use) => {
    await use(new ExternalViewArticlePage(page));
  },
});
