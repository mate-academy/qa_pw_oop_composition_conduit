import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';

test.beforeEach(async ({ page, user, articleWithOneTag }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithOneTag);
});

test('Find own article by tag from the Popular Tags section', async ({
  internalHomePage,
  user,
  articleWithOneTag,
}) => {
  const [tag] = articleWithOneTag.tags;
  const articleFeedItem = internalHomePage.tagFeedTab.articleFeedItem;

  await internalHomePage.header.clickHomeLink();
  await internalHomePage.assertOpened();

  await internalHomePage.popularTags.assertPopularTagsIsVisible();
  await internalHomePage.popularTags.assertTagIsVisible(tag);
  await internalHomePage.popularTags.clickTag(tag);

  await internalHomePage.tagFeedTab.assertTabLinkVisible(tag);
  await internalHomePage.tagFeedTab.assertTabIsActive(tag);

  await articleFeedItem.assertArticleIsVisible(articleWithOneTag.title);
  await articleFeedItem.assertArticleAuthorIsVisible(
    articleWithOneTag.title,
    user.username,
  );
  await articleFeedItem.assertArticleTagsAreVisible(
    articleWithOneTag.title,
    articleWithOneTag.tags,
  );
});
