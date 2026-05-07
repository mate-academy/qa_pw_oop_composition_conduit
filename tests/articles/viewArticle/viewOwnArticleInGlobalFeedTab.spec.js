import { test } from '../../_fixtures/fixtures';
import { InternalViewArticlePage } from '../../../src/ui/pages/article/InternalViewArticlePage';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithoutTags }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithoutTags);
});

test('View own article in Global Feed tab', async ({
  articleWithoutTags,
  page,
  user,
  internalViewArticlePage,
  internalHomePage
}) => {

  await internalViewArticlePage.internalHeader.clickHomeLink();
  await internalHomePage.yourFeed.assertTabLinkVisible();
  await internalHomePage.globalFeed.open();
  await internalHomePage.globalFeed.articleFeedItem.
    assertArticleTitleContainText(articleWithoutTags.title);
});
