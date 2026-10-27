import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';
import { expect } from '../../../src/common/helpers/pw';

test.use({ contextsNumber: 2 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('Not logged in user can open the article page created by other user from the Global Feed section', async ({
  articleWithoutTags,
  pages,
}) => {
  const externalHomePage = new ExternalHomePage(pages[1], 2);

  await expect(async () => {
    await externalHomePage.open();
    await externalHomePage.globalFeed.open();
    await externalHomePage.globalFeed.articleFeedItem.assertArticleLinkIsVisible(
      articleWithoutTags.title,
    );
  }).toPass({ timeout: 30000 });

  await externalHomePage.globalFeed.articleFeedItem.openArticle(
    articleWithoutTags.title,
  );
});
