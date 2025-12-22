import { test, expect } from '@playwright/test';
import { InternalHomePage } from '../../src/ui/pages/home/InternalHomePage';
import { InternalViewArticlePage } from '../../src/ui/pages/article/InternalViewArticlePage';

test.describe('Home Page - Logged-in User', () => {
  test('can view own article in Global Feed', async ({ page }) => {
    const userId = 1;
    const homePage = new InternalHomePage(page, userId);

    await homePage.globalFeed.open();
    const article = await homePage.globalFeed.getArticleByTitle('My Article');
    await article.open();

    const articlePage = new InternalViewArticlePage(page, userId);
    await expect(await articlePage.getTitle()).toBe('My Article');
  });

  test('can find own article by tag from Popular Tags', async ({ page }) => {
    const userId = 1;
    const homePage = new InternalHomePage(page, userId);

    const tagName = 'test-tag';
    await homePage.popularTags.clickTag(tagName);

    const tagFeed = homePage.tagFeed; // jeśli masz komponent TagFeedTab w InternalHomePage
    const article = await tagFeed.getArticleByTitle('My Article');
    await article.open();

    const articlePage = new InternalViewArticlePage(page, userId);
    await expect(await articlePage.getTags()).toContain(tagName);
  });
});
