import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { test } from '../../_fixtures/fixtures';

test.describe('Own article', () => {
  test.beforeEach(async ({ page, user }) => {
    await signUpUser(page, user);
  });

  test('View an article in the global feed', async ({
    page,
    user,
    articleWithoutTags,
    internalHomePage,
  }) => {
    await createArticle(page, articleWithoutTags);

    await internalHomePage.open();

    await internalHomePage.globalFeedTab.open();
    await internalHomePage.globalFeedTab.articleFeedItem
      .assertArticleContainsAuthorName(
        user.username,
      );
  });

  test('Find an article by tag from popular tags section', async ({
    page,
    user,
    articleWithOneTag,
    internalHomePage,
  }) => {
    await createArticle(page, articleWithOneTag);

    await internalHomePage.open();
    await internalHomePage.popularTags.clickTag(articleWithOneTag.tags[0]);
    await internalHomePage.tagFeedTab.articleFeedItem
      .assertArticleContainsAuthorName(
        user.username,
      );
  });
});
