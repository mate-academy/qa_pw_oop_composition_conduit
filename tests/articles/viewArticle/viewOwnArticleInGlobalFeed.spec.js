import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';

test.beforeEach(async ({ page, user, articleWithoutTags }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithoutTags);
});

test('View own article in the Global Feed section', async ({
  internalHomePage,
  user,
  articleWithoutTags,
}) => {
  const articleFeedItem = internalHomePage.globalFeed.articleFeedItem;

  await internalHomePage.header.clickHomeLink();
  await internalHomePage.assertOpened();

  await internalHomePage.globalFeed.open();

  await articleFeedItem.assertArticleIsVisible(articleWithoutTags.title);
  await articleFeedItem.assertArticleDescriptionIsVisible(
    articleWithoutTags.title,
    articleWithoutTags.description,
  );
  await articleFeedItem.assertArticleAuthorIsVisible(
    articleWithoutTags.title,
    user.username,
  );
});
