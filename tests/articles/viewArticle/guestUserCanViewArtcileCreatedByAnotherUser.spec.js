import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithoutTags }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithoutTags);
});

test('Not logged in user can view the article created by other user in the Global Feed section', async ({
  articleWithoutTags,
  externalHomePage,
  externalViewArticlePage,
  settingsPage,
  user,
}) => {
  await settingsPage.open();
  await settingsPage.assertOpened();
  await settingsPage.clickLogOutButton();
  await externalHomePage.assertOpened();
  await externalHomePage.globalFeed.open();
  await externalHomePage.globalFeed.assertTabLinkVisible();

  await externalHomePage.globalFeed.articleFeedItem.assertArticleIsShownInTheList(
    articleWithoutTags.title,
  );
  await externalHomePage.globalFeed.articleFeedItem.openArctileFromTheFeed(
    articleWithoutTags.title,
  );
});
