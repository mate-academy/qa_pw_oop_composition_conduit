import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithOneTag }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithOneTag);
});

test('User can view Own Article by popular tag section', async ({
  articleWithOneTag,
  internalViewArticlePage,
  internalHomePage,
  page,
}) => {
  await internalViewArticlePage.internalHeader.clickHomeLink();
  await internalHomePage.popularTags.clickTag(articleWithOneTag.tags[0]);
  await page.waitForTimeout(3000);
  await internalHomePage.globalFeed.assertCreatedArticleTitle(
    articleWithOneTag.title,
  );
});
