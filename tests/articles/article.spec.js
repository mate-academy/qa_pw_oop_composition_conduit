import { test, expect } from '@playwright/test';
import { ExternalHomePage } from '../../src/ui/pages/home/ExternalHomePage';
import { ExternalViewArticlePage } from '../../src/ui/pages/article/ExternalViewArticlePage';

test.describe('Home Page - Not Logged-in User', () => {
  test('can view article created by other user in Global Feed', async ({
    page,
  }) => {
    const homePage = new ExternalHomePage(page);

    await homePage.globalFeed.open();
    const article =
      await homePage.globalFeed.getArticleByTitle('Other Article');

    await article.assertVisible();
  });

  test('can open article page from Global Feed', async ({ page }) => {
    const homePage = new ExternalHomePage(page);

    await homePage.globalFeed.open();
    const article =
      await homePage.globalFeed.getArticleByTitle('Other Article');
    await article.open();

    const articlePage = new ExternalViewArticlePage(page);
    await expect(await articlePage.getTitle()).toBe('Other Article');
  });
});
