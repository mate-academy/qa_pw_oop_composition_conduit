import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithoutTags }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithoutTags);
});

test('User can view Own Article at Global Feed', async ({
  articleWithoutTags,
  internalViewArticlePage,
  internalHomePage,
  page,
}) => {
  await internalViewArticlePage.internalHeader.clickHomeLink();
  await internalHomePage.globalFeed.open();
  await page.waitForTimeout(3000);
  await internalHomePage.globalFeed.assertCreatedArticleTitle(
    articleWithoutTags.title,
  );
});
