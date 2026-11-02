import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test('Logged-in user can view own article in Global Feed', async ({
  page,
  user,
  articleWithoutTags,
  internalHomePage,
  internalViewArticlePage,
}) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithoutTags);

  await internalHomePage.open();
  await internalHomePage.globalFeed.open();

  await internalHomePage.globalFeed.articleFeedItem.assertArticleIsVisible(
    articleWithoutTags.title,
  );

  await internalHomePage.globalFeed.articleFeedItem.clickArticle(
    articleWithoutTags.title,
  );

  await internalViewArticlePage.assertArticleTitleIsVisible(
    articleWithoutTags.title,
  );
  await internalViewArticlePage.assertArticleTextIsVisible(
    articleWithoutTags.text,
  );
  await internalViewArticlePage.assertArticleAuthorNameIsVisible(user.username);
});
