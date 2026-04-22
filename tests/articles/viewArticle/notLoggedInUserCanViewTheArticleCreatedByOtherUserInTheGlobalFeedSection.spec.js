import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';

test.use({ contextsNumber: 2, usersNumber: 2 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test(
  "Not logged-in user can view the article "
  + "created by other user in the Global Feed section",
  async ({
    pages,
    articleWithoutTags,
  }) => {
    const externalHomePage = new ExternalHomePage(pages[1], 2);

    await externalHomePage.open();

    await externalHomePage
      .globalFeed
      .articleFeedItem
      .assertArticleTitleIsVisible(articleWithoutTags.title);

  });