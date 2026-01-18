import { test } from '../../_fixtures/fixtures';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.use({ contextsNumber: 1, usersNumber: 1 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('Logged-in user can view own article in the Global Feed section', async ({
  articleWithoutTags,
  pages,
  users,
}) => {
  const internalHomePage = new InternalHomePage(pages[0], 1);

  await internalHomePage.open();
  await internalHomePage.globalFeed.open();

  await internalHomePage.globalFeed.articleFeedItem.assertArticleVisible(
    articleWithoutTags.title,
  );
  await internalHomePage.globalFeed.articleFeedItem.assertArticleAuthor(
    articleWithoutTags.title,
    users[0].username,
  );
});
