import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.use({ contextsNumber: 1, usersNumber: 1 });

test.beforeEach(async ({ page, users, articleWithoutTags }) => {
  await signUpUser(page, users[0], 1);
  await createArticle(page, articleWithoutTags, 1);
});

test('Logged-in user can view own article in the Global Feed section', async ({
  internalHomePage,
  articleWithoutTags,
}) => {
  await internalHomePage.header.clickConduitLogo();
  await internalHomePage.globalFeed.open();

  await internalHomePage.globalFeed.article(articleWithoutTags.title)
  .assertVisible();
});
