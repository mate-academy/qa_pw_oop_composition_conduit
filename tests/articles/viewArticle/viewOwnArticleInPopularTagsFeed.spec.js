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

test('Logged-in user can find own article by Tag', async ({
  internalHomePage,
  user,
}) => {
  await internalHomePage.open();
  await internalHomePage.globalFeed.open();

  await internalHomePage.popularTags.assertAllTagsAreVisibleInPopular(
    article.tags,
  );

  await internalHomePage.popularTags.clickTag(article.tags[0]);

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
