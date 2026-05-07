import { test } from '../../_fixtures/fixtures';
import { InternalViewArticlePage } from '../../../src/ui/pages/article/InternalViewArticlePage';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithOneTag }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithOneTag);
});

test('View own article by Popular Tags', async ({
  articleWithOneTag,
  page,
  user,
  internalViewArticlePage,
  internalHomePage
}) => {

  await internalViewArticlePage.internalHeader.clickHomeLink();
  await page.reload();
  await internalHomePage.yourFeed.assertTabLinkVisible();
  await internalHomePage.popularTags.
    clickTagOnPopularTags(articleWithOneTag.tags[0]);
  await internalHomePage.tagFeedTab.articleFeedItem.
    assertArticleTitleContainText(articleWithOneTag.title);
});
