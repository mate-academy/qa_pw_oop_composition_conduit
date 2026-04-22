import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';

test.beforeEach(async ({ page, user, articleWithOneTag }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithOneTag);
});

test(
  "Logged-in user can find own article by Tag from the Popular tags section "
  + "and view in the Tag's Feed",
  async ({
    internalHomePage,
    articleWithOneTag,
  }) => {
    await internalHomePage.open();
    await internalHomePage.popularTags.clickTag(articleWithOneTag.tags[0]);
    await internalHomePage
      .popularTags.assertTagIsVisible(articleWithOneTag.tags[0]);
    await internalHomePage.globalFeed.articleFeedItem
      .assertArticleTitleIsVisible(
        articleWithOneTag.title,
      );
  });