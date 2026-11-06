import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithoutTags }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithoutTags);
});

test('Logged-in user can view own article in the Global Feed', async ({
  articleWithoutTags,
  internalHomePage,
  viewArticlePage,
  user,
}) => {
  await internalHomePage.open();
  await internalHomePage.globalFeed.open();
  await internalHomePage.globalFeed.assertArticleVisible(
    articleWithoutTags.title,
  );
  await internalHomePage.globalFeed.openArticle(articleWithoutTags.title);

  await viewArticlePage.assertArticleTitleIsVisible(articleWithoutTags.title);
  await viewArticlePage.assertArticleTextIsVisible(articleWithoutTags.text);
  await viewArticlePage.assertArticleAuthorNameIsVisible(user.username);
});
