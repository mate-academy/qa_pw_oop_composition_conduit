import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';

test.beforeEach(async ({ page, user, articleWithOneTag }) => {
  await signUpUser(page, user, 1);
  await createArticle(page, articleWithOneTag, 1);
});

test('View own article in the tag feed tab', async ({
  articleWithOneTag,
  internalHomePage,
}) => {
  await internalHomePage.open();
  await internalHomePage.popularTags.clickTag(articleWithOneTag.tags[0]);
  await internalHomePage.tagFeedTab.assertVisible(articleWithOneTag.tags[0]);
  await internalHomePage.tagFeedTab.articleListItem.assertArticleIsVisible(
    articleWithOneTag.title
  )
});

test.afterEach(async ({ page}) => {
  await page.close();
});
