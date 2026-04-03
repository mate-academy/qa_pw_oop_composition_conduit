import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';

test.beforeEach(async ({ page, user, articleWithoutTags }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithoutTags);
});

test('Logged-in user can view own article in the Global Feed section', async ({
  internalHomePage,
  articleWithoutTags,
}) => {
  await internalHomePage.open();
  await internalHomePage.globalFeed.assertTabLinkVisible();
  await internalHomePage.globalFeed.articleFeedItem.assertArticleIsVisible(
    articleWithoutTags.title,
  );
});
