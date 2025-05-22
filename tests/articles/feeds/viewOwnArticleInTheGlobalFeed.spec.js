import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';

test.beforeEach(async ({ page, user, articleWithoutTags }) => {
  await signUpUser(page, user, 1);
  await createArticle(page, articleWithoutTags, 1);
});

test('View own article in the global feed tab', async ({
  articleWithoutTags,
  internalHomePage
}) => {

  await internalHomePage.open()
  await internalHomePage.globalFeedTab.open();
  await internalHomePage.globalFeedTab.articleListItem.assertArticleIsVisible(
      articleWithoutTags.title
  );
});

test.afterEach(async ({ page}) => {
  await page.close();
});
