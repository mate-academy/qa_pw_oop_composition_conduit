import { test } from '../_fixtures/fixtures';
import { createArticle } from '../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { InternalHomePage } from '../../src/ui/pages/home/InternalHomePage';

test.use({ contextsNumber: 1, usersNumber: 1 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('Logged-in user can view own article in the Global Feed section', async ({
  articleWithoutTags,
  pages,
  users,
}) => {
  const homePage = new InternalHomePage(pages[0], 1);

  await homePage.open();

  const clickAndAssert = async () => {
    await homePage.globalFeed.clickGlobalFeedTab();
    await homePage.globalFeed.articleFeedItem.assertArticleAuthorIsVisible(
      users[0].username,
    );
    await homePage.globalFeed.articleFeedItem.assertArticleTitleIsVisible(
      articleWithoutTags.title,
    );
  };

  await homePage.waitAndReload(clickAndAssert);
});
