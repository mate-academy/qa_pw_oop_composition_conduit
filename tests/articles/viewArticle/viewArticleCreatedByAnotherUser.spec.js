import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';

test.use({ contextsNumber: 1, usersNumber: 1 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});


test('View an article created by another user', async ({
  articleWithoutTags,
  page,
}) => {
  const internalHomePage = new InternalHomePage(page);

  await internalHomePage.open();
  await internalHomePage.globalFeed.open();
  await internalHomePage.globalFeed.assertArticleIsVisible(
    articleWithoutTags.title,
  );
});
