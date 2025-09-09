import { test as base } from '@playwright/test';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';
import { ViewArticlePage } from '../../src/ui/pages/article/ViewArticlePage';
import { ExternalViewArticlePage } from '../../src/ui/pages/article/viewArticle/ExternalViewArticlePage';
import { InternalHomePage } from '../../src/ui/pages/home/InternalHomePage';

export const test = base.extend<{
  articleWithoutTags;
  articleWithOneTag;
  createArticlePage;
  viewArticlePage;
  externalViewArticlePage;
  internalHomePage;
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
  viewArticlePage: async ({ page }, use) => {
    const viewArticlePage = new ViewArticlePage(page);

    await use(viewArticlePage);
  },
  externalViewArticlePage: async ({ page }, use) => {
    const externalViewArticlePage = new ExternalViewArticlePage(page);

    await use(externalViewArticlePage);
  },
  internalHomePage: async ({ page }, use) => {
    const internalHomePage = new InternalHomePage(page);

    await use(internalHomePage);
  }
});
