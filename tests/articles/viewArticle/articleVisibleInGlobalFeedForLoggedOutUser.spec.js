import { test } from '../../_fixtures/fixtures';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';

test.use({ contextsNumber: 2 });

test.beforeEach(async ({ pages, user, articleWithoutTags }) => {
  await signUpUser(pages[0], user, 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('View an article created by another user in the Global Feed', async ({
  pages,
  user,
  articleWithoutTags,
}) => {
  const externalHomePage = new ExternalHomePage(pages[1], 2);
  const articleFeedItem = externalHomePage.globalFeed.articleFeedItem;

  await externalHomePage.openUntilArticleIsInGlobalFeed(
    articleWithoutTags.title,
  );

  await externalHomePage.header.assertSignInLinkIsVisible();
  await externalHomePage.header.assertSignUpLinkIsVisible();

  await externalHomePage.globalFeed.assertTabLinkVisible();
  await externalHomePage.globalFeed.open();

  await articleFeedItem.assertArticleIsVisible(articleWithoutTags.title);
  await articleFeedItem.assertArticleDescriptionIsVisible(
    articleWithoutTags.title,
    articleWithoutTags.description,
  );
  await articleFeedItem.assertArticleAuthorIsVisible(
    articleWithoutTags.title,
    user.username,
  );
});
