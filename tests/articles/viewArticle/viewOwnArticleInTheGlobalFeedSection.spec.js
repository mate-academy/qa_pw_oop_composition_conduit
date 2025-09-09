import { test } from '../../_fixtures/fixtures';
import { generateNewArticleData } from '../../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

let article;

test.beforeEach(async ({ page, user, logger }) => {
  article = generateNewArticleData(logger);

  await signUpUser(page, user);
});

test('user can view own article in the Global Feed section', async ({
  internalHomePage,
  createArticlePage,
  baseHomePage,
  externalViewArticlePage
}) => {
  await internalHomePage.header.clickNewArticleLink();

  await createArticlePage.fillTitleField(article.title);
  await createArticlePage.fillDescriptionField(article.description);
  await createArticlePage.fillTextField(article.text);
  await createArticlePage.clickPublishArticleButton();

  await baseHomePage.baseHeader.clickConduitLogo();
  await baseHomePage.globalFeed.open();
  await baseHomePage.globalFeed.openArticleFromGlobalFeed(article.title);
  await externalViewArticlePage.articleContentExternal.assertArticleTitleIsVisible(article.title);
  await externalViewArticlePage.articleContentExternal.assertArticleTextIsVisible(article.text);
});
