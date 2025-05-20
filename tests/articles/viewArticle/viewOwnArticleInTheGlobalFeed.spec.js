import { test } from '../../_fixtures/fixtures';
import { ViewArticlePage } from '../../../src/ui/pages/article/ViewArticlePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';

test.use({ contextsNumber: 2, usersNumber: 2 });

test.beforeEach(async ({ page, user, articleWithoutTags }) => {
  await signUpUser(page, user, 1);
  await createArticle(page, articleWithoutTags, 1);
});

test.only('View own article in the global feed tab', async ({
  articleWithoutTags,
  page,
}) => {
  const homePage = new InternalHomePage(page, 1);

  await homePage.open()
  await homePage.globalFeedTab.open();
  await homePage.globalFeedTab.articlePreview.assertArticleIsVisible(
      articleWithoutTags.title
  );
});

test.afterEach(async ({ page}) => {
  await page.close();
});
