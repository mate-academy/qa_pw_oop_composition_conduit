import { test } from '../../_fixtures/fixtures';
import { ExternalViewArticlePage } from '../../../src/ui/pages/article/ExternalViewArticlePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';

test.use({ contextsNumber: 2, usersNumber: 1 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('Not logged in user can open the article page created by other user from the Global Feed section', async ({
  articleWithoutTags,
  pages,
  users,
}) => {
  const externalViewArticlePage = new ExternalViewArticlePage(pages[1], 2);
  const externalHomePage = new ExternalHomePage(pages[1], 2);

  await externalHomePage.open();
  await externalHomePage.globalFeed.open();
  await externalHomePage.globalFeed.articleFeedItem.waitForArticleInFeed(
    articleWithoutTags.title,
  );
  await externalHomePage.globalFeed.articleFeedItem.openArticle(
    articleWithoutTags.title,
  );
  await externalViewArticlePage.articleContentBlock.assertArticleTitleIsVisible(
    articleWithoutTags.title,
  );
  await externalViewArticlePage.articleContentBlock.assertArticleTextIsVisible(
    articleWithoutTags.text,
  );
  await externalViewArticlePage.articleContentBlock.assertArticleAuthorNameIsVisible(
    users[0].username,
  );
});
