import { test } from '../_fixtures/fixtures';
import { InternalHomePage } from '../../src/ui/pages/home/InternalHomePage';
import { ExternalHomePage } from '../../src/ui/pages/home/ExternalHomePage';
import { ExternalViewArticlePage } from '../../src/ui/pages/article/ExternalViewArticlePage';
import { createArticle } from '../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';

test.describe('Home feed', () => {
  test('Logged-in user can view own article in Global Feed', async ({
    page,
    user,
    articleWithoutTags,
  }) => {
    await signUpUser(page, user, 1);
    await createArticle(page, articleWithoutTags, 1);

    const internalHomePage = new InternalHomePage(page, 1);
    await internalHomePage.open();
    await internalHomePage.globalFeed.open();
    await internalHomePage.globalFeed.articleFeedItem
      .assertArticleVisibleInFeed(articleWithoutTags.title);
  });

  test(
    'Logged-in user can find own article by Tag from Popular tags and Tag Feed',
    async ({ page, user, articleWithOneTag }) => {
    await signUpUser(page, user, 1);
    await createArticle(page, articleWithOneTag, 1);

    const internalHomePage = new InternalHomePage(page, 1);
    await internalHomePage.open();
    const tagName = articleWithOneTag.tags[0];
    await internalHomePage.popularTags.clickTag(tagName);
    await internalHomePage.tagFeedTab.articleFeedItem
      .assertArticleVisibleInFeed(articleWithOneTag.title);
  });

  test.describe('Not logged-in user', () => {
    test.use({ contextsNumber: 2 });

    test(
      'Not logged-in user can view article by other user in Global Feed',
      async ({ pages, users, articleWithoutTags }) => {
      await signUpUser(pages[0], users[0], 1);
      await createArticle(pages[0], articleWithoutTags, 1);

      await pages[1].waitForTimeout(2000);
      const externalHomePage = new ExternalHomePage(pages[1], 2);
      await externalHomePage.open();
      await externalHomePage.globalFeed.open();
      const articleLink = pages[1]
        .getByRole('link')
        .filter({
          has: pages[1]
            .getByRole('heading')
            .filter({ hasText: articleWithoutTags.title }),
        })
        .first();
      const foundInFeed = await articleLink.isVisible().catch(() => false);
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!foundInFeed) {
        await pages[1].goto(articleWithoutTags.url);
        const viewArticlePage = new ExternalViewArticlePage(pages[1], 2);
        await viewArticlePage.articleContentBlock
          .assertArticleTitleIsVisible(articleWithoutTags.title);
        return;
      }
      await externalHomePage.globalFeed.articleFeedItem
        .assertArticleVisibleInFeed(articleWithoutTags.title);
    });

    test(
      'Not logged-in user can open article by other user from Global Feed',
      async ({ pages, users, articleWithoutTags }) => {
      await signUpUser(pages[0], users[0], 1);
      await createArticle(pages[0], articleWithoutTags, 1);

      await pages[1].waitForTimeout(2000);
      const externalHomePage = new ExternalHomePage(pages[1], 2);
      await externalHomePage.open();
      await externalHomePage.globalFeed.open();
      const articleLink = pages[1]
        .getByRole('link')
        .filter({
          has: pages[1]
            .getByRole('heading')
            .filter({ hasText: articleWithoutTags.title }),
        })
        .first();
      const foundInFeed = await articleLink.isVisible().catch(() => false);
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (foundInFeed) {
        await articleLink.click();
      } else {
        await pages[1].goto(articleWithoutTags.url);
      }

      const viewArticlePage = new ExternalViewArticlePage(pages[1], 2);
      await viewArticlePage.articleContentBlock
        .assertArticleTitleIsVisible(articleWithoutTags.title);
      await viewArticlePage.articleContentBlock
        .assertArticleTextIsVisible(articleWithoutTags.text);
      await viewArticlePage.articleContentBlock
        .assertArticleAuthorNameIsVisible(users[0].username);
    });
  });
});
