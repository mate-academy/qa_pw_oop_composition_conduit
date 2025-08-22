import { test } from '../../_fixtures/fixtures';
import { generateNewArticleData } from '../../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';

let article;

test.beforeEach(async ({ page, user, logger }) => {
  article = generateNewArticleData(logger, 1);

  await signUpUser(page, user);
  await createArticle(page, article, user);
});

test('Logged-in user can view own article in the Global Feed section', async ({
  internalHomePage,
  user,
}) => {
  await internalHomePage.open();
  await internalHomePage.globalFeed.open();

  const articleItem = internalHomePage.globalFeed.articleFeedItem;

  await articleItem.assertArticleTitleContainsText(
    user.username,
    article.title,
  );
  await articleItem.assertArticleDescriptionContainsText(
    user.username,
    article.description,
  );
  await articleItem.assertArticleTagsAreCorrect(user.username, article.tags);
});
