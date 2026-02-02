import { test } from '../_fixtures/fixtures';
import { createArticle } from '../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { ExternalHomePage } from '../../src/ui/pages/home/ExternalHomePage';
import { ExternalViewArticlePage } from '../../src/ui/pages/article/viewArticle/ExternalViewArticlePage';

test.use({ contextsNumber: 2, usersNumber: 2 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('Not logged in user can open the article page created by other user from the Global Feed section', async ({
  articleWithoutTags,
  pages,
  users,
}) => {
  const homePage = new ExternalHomePage(pages[1]);
  const externalViewArticlePage = new ExternalViewArticlePage(pages[1]);

  await homePage.open();

  const assert = async () => {
    await homePage.globalFeed.articleFeedItem.assertArticleAuthorIsVisible(
      users[0].username,
    );
    await homePage.globalFeed.articleFeedItem.assertArticleTitleIsVisible(
      articleWithoutTags.title,
    );
  };

  await homePage.waitAndReload(assert);
  await homePage.globalFeed.articleFeedItem.openArticlePage(
    articleWithoutTags.title,
  );

  await externalViewArticlePage.externalViewArticleBlockViewArticleBlock.assertArticleTitleIsVisible(
    articleWithoutTags.title,
  );
  await externalViewArticlePage.externalViewArticleBlockViewArticleBlock.assertArticleAuthorNameIsVisible(
    users[0].username,
  );
});
