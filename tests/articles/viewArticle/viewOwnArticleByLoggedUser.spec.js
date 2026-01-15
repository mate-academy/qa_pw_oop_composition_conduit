import { test } from '../../_fixtures/fixtures';
import { generateNewArticleData } from '../../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

let article;

test.beforeEach(async ({ page, user, logger }) => {
  article = generateNewArticleData(logger);

  await signUpUser(page, user);
});

test('Logged user can view own article', async ({
  internalHomePage,
  createArticlePage,
  viewArticlePage,
}) => {
  await internalHomePage.header.clickNewArticleLink();

  await createArticlePage.fillTitleField(article.title);
  await createArticlePage.fillDescriptionField(article.description);
  await createArticlePage.fillTextField(article.text);
  await createArticlePage.clickPublishArticleButton();

  await viewArticlePage.assertArticleTitleIsVisible(article.title);
  await viewArticlePage.assertArticleTextIsVisible(article.text);

  await internalHomePage.header.clickHomeLink();
  await internalHomePage.globalFeedTab.open();

  await internalHomePage.articleListItem.assertArticleIsVisible(article.title);
});
