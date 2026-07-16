import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithoutTags }) => {
  await signUpUser(page, user, 1);
  await createArticle(page, articleWithoutTags, 1);
});

test('View an own article', async ({
  internalHomePage,
  articleWithoutTags,
}) => {
  await internalHomePage.open();
  await internalHomePage.globalFeed.open();
  await internalHomePage.globalFeed.assertArticleIsVisible(
    articleWithoutTags.title,
  );
});
