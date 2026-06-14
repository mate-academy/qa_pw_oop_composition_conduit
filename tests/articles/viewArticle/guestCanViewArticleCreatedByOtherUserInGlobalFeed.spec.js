import { test } from '../../_fixtures/fixtures';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.use({ contextsNumber: 2, usersNumber: 2 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('Not logged in user can view ' +
  ' the article created by other user in the Global Feed section', async ({
    articleWithoutTags,
    pages,
    users,
  }) => {
  const externalHomePage = new ExternalHomePage(pages[1], 2);

  await externalHomePage.open();
  await externalHomePage.globalFeed.open();
  await externalHomePage.globalFeed.assertTabLinkVisible();
  await externalHomePage.globalFeed
    .assertArticleTitleIsVisible(articleWithoutTags.title);
  await externalHomePage.globalFeed
    .assertArticleDescriptionIsVisible(articleWithoutTags.title,
      articleWithoutTags.description);
  await externalHomePage.globalFeed
    .assertArticleAuthorNameIsVisible(articleWithoutTags.title,
      users[0].username);
});
