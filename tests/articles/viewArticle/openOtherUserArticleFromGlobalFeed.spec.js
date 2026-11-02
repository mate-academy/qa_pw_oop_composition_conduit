import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';
import { ExternalViewArticlePage } from '../../../src/ui/pages/article/ExternalViewArticlePage';

test.use({ contextsNumber: 2 });

test('Guest can open another user article from Global Feed', async ({
  pages,
  user,
  articleWithoutTags,
}) => {
  const authorPage = pages[0];
  const guestPage = pages[1];

  await signUpUser(authorPage, user, 1);
  await createArticle(authorPage, articleWithoutTags, 1);

  const externalHomePage = new ExternalHomePage(guestPage, 2);
  const externalViewArticlePage = new ExternalViewArticlePage(guestPage, 2);

  await externalHomePage.open();
  await externalHomePage.globalFeed.open();

  await externalHomePage.globalFeed.waitForArticle(articleWithoutTags.title);

  const articleFeedItem = externalHomePage.globalFeed.articleFeedItem;

  await articleFeedItem.assertArticleIsVisible(articleWithoutTags.title);

  await articleFeedItem.clickArticle(articleWithoutTags.title);

  await externalViewArticlePage.assertArticleTitleIsVisible(
    articleWithoutTags.title,
  );

  await externalViewArticlePage.assertArticleTextIsVisible(
    articleWithoutTags.text,
  );

  await externalViewArticlePage.assertArticleAuthorNameIsVisible(user.username);
});
