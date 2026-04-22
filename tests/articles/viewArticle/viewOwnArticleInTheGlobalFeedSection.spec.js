import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithoutTags }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithoutTags);
});

test('View own article in the Global Feed section', async ({
  articleWithoutTags,
  user,
  internalHomePage
}) => {
  await internalHomePage.open();
  await internalHomePage.globalFeed.open();

  await internalHomePage
    .globalFeed
    .articleFeedItem
    .assertArticleTitleIsVisible(articleWithoutTags.title);
  await internalHomePage
    .globalFeed
    .articleFeedItem
    .assertArticleTextIsVisible(
      articleWithoutTags.title, articleWithoutTags.description
    );
  await internalHomePage
    .globalFeed
    .articleFeedItem
    .assertArticleAuthorNameIsVisible(articleWithoutTags.title, user.username);
});
