import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithOneTag }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithOneTag);
});

test('Logged-in user can find own article by Tag from the Popular tags section and view in the Tag', async ({
  user,
  articleWithOneTag,
  internalHomePage,
  internalViewArticlePage,
}) => {
  const tagName = articleWithOneTag.tags[0];
  const articleTitle = articleWithOneTag.title;

  await internalHomePage.open();
  await internalHomePage.popularTags.assertTagIsInThePopularTagsSection(
    tagName,
  );
  await internalHomePage.popularTags.clickTagByName(tagName);
  await internalHomePage.tagFeed.assertTagNameIsInFeedToggle(tagName);
  await internalHomePage.tagFeed.articleFeedItem.assertArticleIsShownInTheList(
    articleTitle,
  );
  await internalHomePage.tagFeed.articleFeedItem.openArctileFromTheFeed(
    articleTitle,
  );
  await internalViewArticlePage.articleContentBlock.assertArticleTitleIsVisible(
    articleTitle,
  );
  await internalViewArticlePage.articleContentBlock.assertArticleAuthorNameIsVisible(
    user.username,
  );
});
