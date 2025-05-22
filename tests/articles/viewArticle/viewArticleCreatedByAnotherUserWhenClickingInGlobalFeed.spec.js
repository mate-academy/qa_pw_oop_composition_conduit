import { test } from '../../_fixtures/fixtures';
import { ViewArticlePage } from '../../../src/ui/pages/article/ViewArticlePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';

test.use({ contextsNumber: 2, usersNumber: 2 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('Not logged in user can open the article page created by other user from the Global Feed section', async ({
  articleWithoutTags,
  pages,
}) => {
  const homePage = new ExternalHomePage(pages[1], 2);
  const viewArticlePage = new ViewArticlePage(pages[1], 2);
  await homePage.open()
  await homePage.globalFeedTab.open();
  await homePage.globalFeedTab.articlePreview.clickArticlePreview(
    articleWithoutTags.title
  );
  await viewArticlePage.assertArticleTitleIsVisible(
    articleWithoutTags.title
  );
});

test.afterEach(async ({ pages}) => {
  await pages[0].close();
  await pages[1].close();
});
