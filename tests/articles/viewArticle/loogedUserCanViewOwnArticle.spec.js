import { test } from '../../_fixtures/fixtures';
import { InternalViewArticlePage } from '../../../src/ui/pages/article/InternalViewArticlePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';

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
  const internalViewArticlePage = new InternalViewArticlePage(pages[0], 1);
  const internalHomePage = new InternalHomePage(pages[0], 1);

  await internalHomePage.open();
  await internalHomePage.globalFeed.open();
  await internalHomePage.globalFeed.articleFeedItem.openArticle(
    articleWithoutTags.title,
  );
  await internalViewArticlePage.articleContentBlock.assertArticleTitleIsVisible(
    articleWithoutTags.title,
  );
  await internalViewArticlePage.articleContentBlock.assertArticleTextIsVisible(
    articleWithoutTags.text,
  );
  await internalViewArticlePage.articleContentBlock.assertArticleAuthorNameIsVisible(
    users[0].username,
  );
});
