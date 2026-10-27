import { test } from '../../_fixtures/fixtures';
import { generateNewArticleData } from '../../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

let article;

test.beforeEach(async ({ page, user, logger }) => {
  article = generateNewArticleData(logger, 1);

  await signUpUser(page, user);
});

test(`Logged-in user can find own article by Tag from the Popular tags section and view in the Tag'Feed`, async ({
  internalHomePage,
  createArticlePage,
  internalViewArticlePage,
}) => {
  await internalHomePage.header.clickNewArticleLink();

  await createArticlePage.fillTitleField(article.title);
  await createArticlePage.fillDescriptionField(article.description);
  await createArticlePage.fillTextField(article.text);
  await createArticlePage.fillTagsField(article.tags);
  await createArticlePage.clickPublishArticleButton();

  await internalViewArticlePage.articleContent.assertArticleTitleIsVisible(
    article.title,
  );
  await internalViewArticlePage.articleContent.assertArticleTextIsVisible(
    article.text,
  );
  await internalViewArticlePage.articleContent.assertArticleTagsAreVisible(
    article.tags,
  );

  await internalHomePage.header.clickConduitLogo();
  await internalHomePage.open();
  await internalHomePage.popularTags.clickTag(article.tags[0]);
  await internalHomePage.tagFeed.assertTabLinkVisible(article.tags[0]);
  await internalHomePage.tagFeed.articleFeedItem.assertArticleLinkIsVisible(
    article.title,
  );
});
