import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithoutTags }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithoutTags);
});

test('Logged-in user can view own article in the Global Feed section', async ({
  articleWithoutTags,
  internalViewArticlePage,
  internalHomePage,
  user,
}) => {
  await internalHomePage.open();
  await internalHomePage.globalFeed.open();

  await internalHomePage.globalFeed.articleFeedItem.assertArticleIsShownInTheList(
    articleWithoutTags.title,
  );
  await internalHomePage.globalFeed.articleFeedItem.openArctileFromTheFeed(
    articleWithoutTags.title,
  );
  await internalViewArticlePage.articleContentBlock.assertArticleTitleIsVisible(
    articleWithoutTags.title,
  );
  await internalViewArticlePage.articleContentBlock.assertArticleAuthorNameIsVisible(
    user.username,
  );
});
