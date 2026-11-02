import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test('Logged-in user can find own article by Popular Tag and view it', async ({
  page,
  user,
  articleWithOneTag,
  internalHomePage,
  internalViewArticlePage,
}) => {
  await signUpUser(page, user);

  await internalHomePage.open();
  await internalHomePage.popularTags.assertPopularTagsVisible();

  const popularTag = await internalHomePage.popularTags.getFirstPopularTag();

  articleWithOneTag.tags = [popularTag];

  await createArticle(page, articleWithOneTag);

  await internalHomePage.open();

  await internalHomePage.popularTags.assertTagIsVisible(popularTag);
  await internalHomePage.popularTags.clickTag(popularTag);

  await internalHomePage.tagFeed.assertTabVisible(popularTag);

  await internalHomePage.tagFeed.assertArticleIsVisible(
    articleWithOneTag.title,
  );

  await internalHomePage.tagFeed.openArticle(articleWithOneTag.title);

  await internalViewArticlePage.assertArticleTitleIsVisible(
    articleWithOneTag.title,
  );

  await internalViewArticlePage.assertArticleTextIsVisible(
    articleWithOneTag.text,
  );

  await internalViewArticlePage.assertArticleTagsAreVisible(
    articleWithOneTag.tags,
  );

  await internalViewArticlePage.assertArticleAuthorNameIsVisible(user.username);
});
