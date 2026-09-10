import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithoutTags }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithoutTags);
});

test('View own article in Global Feed', async ({
  internalHomePage,
  articleWithoutTags,
  user,
}) => {
  const { globalFeed } = internalHomePage;

  await internalHomePage.open();
  await globalFeed.open();

  await globalFeed.articleFeedItem.assertArticleVisible(
    articleWithoutTags.title,
  );

  await globalFeed.articleFeedItem.assertAuthorVisible(
    articleWithoutTags.title,
    user.username,
  );
});
