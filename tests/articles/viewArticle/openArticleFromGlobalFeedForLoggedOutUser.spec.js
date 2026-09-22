import { test } from '../../_fixtures/fixtures';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';
import { ExternalViewArticlePage } from '../../../src/ui/pages/article/ExternalViewArticlePage';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';

test.use({ contextsNumber: 2 });

test.beforeEach(async ({ pages, user, articleWithoutTags }) => {
  await signUpUser(pages[0], user, 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('Open the article page of another user from the Global Feed', async ({
  pages,
  user,
  articleWithoutTags,
}) => {
  const externalHomePage = new ExternalHomePage(pages[1], 2);
  const externalViewArticlePage = new ExternalViewArticlePage(pages[1], 2);
  const articleFeedItem = externalHomePage.globalFeed.articleFeedItem;
  const articleContentBlock = externalViewArticlePage.articleContentBlock;

  await externalHomePage.openUntilArticleIsInGlobalFeed(
    articleWithoutTags.title,
  );

  await externalHomePage.globalFeed.open();
  await articleFeedItem.clickArticle(articleWithoutTags.title);

  await externalViewArticlePage.assertArticleIsOpened(articleWithoutTags.url);
  await externalViewArticlePage.header.assertSignInLinkIsVisible();
  await externalViewArticlePage.header.assertSignUpLinkIsVisible();

  await articleContentBlock.assertArticleTitleIsVisible(
    articleWithoutTags.title,
  );
  await articleContentBlock.assertArticleTextIsVisible(articleWithoutTags.text);
  await articleContentBlock.assertArticleAuthorNameIsVisible(user.username);
});
