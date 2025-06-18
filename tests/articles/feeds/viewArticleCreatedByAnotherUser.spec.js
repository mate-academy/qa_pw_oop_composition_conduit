import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';

test.use({ contextsNumber: 2, usersNumber: 2 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('Not logged in user can view the article created by other user in the Global Feed section', async ({
  articleWithoutTags,
  pages,
}) => {
  const externalHomePage = new ExternalHomePage(pages[1], 2);
  await externalHomePage.open()
  await externalHomePage.globalFeedTab.open();
  await externalHomePage.globalFeedTab.articleListItem.assertArticleIsVisible(
      articleWithoutTags.title
  );
});

test.afterEach(async ({ pages}) => {
  await pages[0].close();
  await pages[1].close();
});
