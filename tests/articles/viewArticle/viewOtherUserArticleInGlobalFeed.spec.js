import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';

test.use({ contextsNumber: 2 });

test('Guest can view another user article in Global Feed', async ({
  pages,
  user,
  articleWithoutTags,
}) => {
  const authorPage = pages[0];
  const guestPage = pages[1];

  await signUpUser(authorPage, user, 1);
  await createArticle(authorPage, articleWithoutTags, 1);

  const externalHomePage = new ExternalHomePage(guestPage, 2);

  await externalHomePage.open();
  await externalHomePage.globalFeed.open();

  await externalHomePage.globalFeed.waitForArticle(articleWithoutTags.title);

  const articleFeedItem = externalHomePage.globalFeed.articleFeedItem;

  await articleFeedItem.assertArticleIsVisible(articleWithoutTags.title);

  await articleFeedItem.assertArticleAuthorIsVisible(
    articleWithoutTags.title,
    user.username,
  );
});
