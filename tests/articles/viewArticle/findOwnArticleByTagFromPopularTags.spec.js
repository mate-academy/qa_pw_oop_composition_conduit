/* eslint-disable max-len */
import { test } from '../../_fixtures/fixtures';
import { generateNewArticleData } from '../../../src/common/testData/generateNewArticleData';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.use({ contextsNumber: 1, usersNumber: 1 });

test.beforeEach(async ({ page, users }) => {
  await signUpUser(page, users[0], 1);
});

test("Logged-in user can find own article by Tag from the Popular tags section and view in the Tag Feed", async ({
  internalHomePage,
  page,
  logger,
}) => {
  await internalHomePage.header.clickConduitLogo();
  const tag = await internalHomePage.popularTags.firstTagText();

  const article = generateNewArticleData(logger, 1);
  article.tags = [tag];
  article.tagList = [tag];
  await createArticle(page, article, 1);

  await internalHomePage.header.clickConduitLogo();
  await internalHomePage.popularTags.click(tag);
  await internalHomePage.tagFeed.assertArticleVisibleByTitle(article.title);
});

