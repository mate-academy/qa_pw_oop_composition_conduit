import { test } from '../../_fixtures/fixtures';
import { generateNewArticleData } from '../../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

let article;

test.beforeEach(async ({ page, user, logger }) => {
  article = generateNewArticleData(logger);

  await signUpUser(page, user);
});

test('Logged-in user can found own article by tags', async ({
  internalHomePage,
  createArticlePage,
  viewArticlePage,
}) => {
  await internalHomePage.header.clickNewArticleLink();

  await createArticlePage.fillTitleField(article.title);
  await createArticlePage.fillDescriptionField(article.description);
  await createArticlePage.fillTextField(article.text);
  await createArticlePage.fillTagsField(article.tags);
  await createArticlePage.clickPublishArticleButton();

  await viewArticlePage.assertArticleTitleIsVisible(article.title);
  await viewArticlePage.assertArticleTextIsVisible(article.text);

  const tagName = article.tags[0];

  await internalHomePage.header.clickHomeLink();
  await internalHomePage.globalFeedTab.open();

  await internalHomePage.popularTags.clickTag(tagName);
  await internalHomePage.popularTags.assertTagIsVisible(tagName);
});
