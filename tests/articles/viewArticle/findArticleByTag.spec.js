import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithOneTag }) => {
  await signUpUser(page, user, 1);
  await createArticle(page, articleWithOneTag, 1);
});

test('Find own article by Tag from the Popular tags section', async ({
  internalHomePage,
  articleWithOneTag,
}) => {
  await internalHomePage.open();

  const tagName = articleWithOneTag.tags[0];

  await internalHomePage.popularTags.clickTag(tagName);
  await internalHomePage.tagFeedTab.assertTagTabIsVisible(tagName);
  await internalHomePage.tagFeedTab.articleFeedItem
    .assertArticleIsVisible(
      articleWithOneTag.title,
    );
});
