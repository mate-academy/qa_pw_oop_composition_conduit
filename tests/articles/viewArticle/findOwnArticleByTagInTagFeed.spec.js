import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithOneTag }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithOneTag);
});

test('Find own article by tag and view it in Tag Feed', async ({
  internalHomePage,
  articleWithOneTag,
}) => {
  const [tag] = articleWithOneTag.tags;

  await internalHomePage.open();

  const { popularTags, tagFeedTab } = internalHomePage;

  await popularTags.clickTag(tag);

  await tagFeedTab.assertTabLinkVisible(tag);

  await tagFeedTab.articleFeedItem.assertArticleVisible(
    articleWithOneTag.title,
  );
});
