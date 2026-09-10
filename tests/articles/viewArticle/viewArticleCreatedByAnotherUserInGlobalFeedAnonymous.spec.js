import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';
import { expect } from '../../../src/common/helpers/pw';

test.use({ contextsNumber: 2, usersNumber: 1 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('View article created by another user in Global Feed (anonymous)', async ({
  pages,
  users,
  articleWithoutTags,
}) => {
  const externalHomePage = new ExternalHomePage(pages[1], 2);
  const { globalFeed } = externalHomePage;

  await externalHomePage.open();
  await globalFeed.open();

  await expect(async () => {
    await pages[1].reload();
    await globalFeed.open();
    await expect(
      globalFeed.articleFeedItem.articleItem(articleWithoutTags.title),
    ).toBeVisible();
  }).toPass({ timeout: 30000 });

  await globalFeed.articleFeedItem.assertAuthorVisible(
    articleWithoutTags.title,
    users[0].username,
  );
});
