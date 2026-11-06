import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithOneTag, internalHomePage }) => {
  await signUpUser(page, user);
  articleWithOneTag.tags = [await internalHomePage.popularTags.firstTagName()];
  await createArticle(page, articleWithOneTag);
});

test('Logged-in user can find own article by Tag', async ({
  articleWithOneTag,
  internalHomePage,
  viewArticlePage,
  user,
}) => {
  const [tag] = articleWithOneTag.tags;

  await internalHomePage.open();
  await internalHomePage.popularTags.clickTag(tag);
  await internalHomePage.tagFeedTab.articleFeedItem.assertArticleVisible(
    articleWithOneTag.title,
  );
  await internalHomePage.tagFeedTab.articleFeedItem.openArticle(
    articleWithOneTag.title,
  );

  await viewArticlePage.assertArticleTitleIsVisible(articleWithOneTag.title);
  await viewArticlePage.assertArticleTextIsVisible(articleWithOneTag.text);
  await viewArticlePage.assertArticleTagsAreVisible(articleWithOneTag.tags);
  await viewArticlePage.assertArticleAuthorNameIsVisible(user.username);
});
