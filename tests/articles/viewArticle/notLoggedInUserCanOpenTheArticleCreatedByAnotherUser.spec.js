import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';
import { ExternalViewArticlePage } from '../../../src/ui/pages/article/ExternalViewArticlePage';

test.use({ contextsNumber: 2, usersNumber: 2 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('Not logged in user can open article created by another user', async ({
  articleWithoutTags,
  pages,
}) => {
  const externalHomePage = new ExternalHomePage(pages[1], 2);
  const externalViewArticlePage = new ExternalViewArticlePage(pages[1], 2);

  await externalHomePage.open();
  await pages[1].waitForLoadState('domcontentloaded');
  await pages[1].waitForTimeout(2000);
  await pages[1].reload();
  await pages[1].waitForTimeout(2000);
  await pages[1].reload();
  await pages[1].reload();
  await pages[1].waitForTimeout(2000);
  await pages[1].reload();
  await pages[1].reload();
  await pages[1].waitForTimeout(2000);
  await externalHomePage.globalFeedTab.assertCreatedArticleTitle(
    articleWithoutTags.title,
  );
  await externalHomePage.articleListItem.clickOnArticleTitle(
    articleWithoutTags.title,
  );
  await externalViewArticlePage.assertArticleTitleIsVisible(
    articleWithoutTags.title,
  );
});
