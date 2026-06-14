import { test } from '../../_fixtures/fixtures';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithoutTags }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithoutTags);
});

test('Logged-in user can view own article in the Global Feed section', async ({
  articleWithoutTags,
  page,
  user,
}) => {
  const internalHomePage = new InternalHomePage(page);

  await internalHomePage.open();
  await internalHomePage.globalFeed.open();

  await internalHomePage
    .globalFeed
    .assertArticleTitleIsVisible(articleWithoutTags.title);
  await internalHomePage
    .globalFeed
    .assertArticleDescriptionIsVisible(articleWithoutTags.title, 
      articleWithoutTags.description);
  await internalHomePage
    .globalFeed
    .assertArticleAuthorNameIsVisible(articleWithoutTags.title, user.username);
});
