import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { assertArticleIsVisible } from '../../../src/ui/actions/articles/assertArticleisVisible';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user, 0);
});

test('Logged-in user can view own article in the Global Feed section.', async ({
  page,
  user,
  internalHomePage,
  articleWithoutTags,
}) => {
  await createArticle(page, articleWithoutTags, 0);

  await internalHomePage.open();
  await internalHomePage.globalFeed.open();

  const article = internalHomePage.globalFeed.articleFeedItem;

  await assertArticleIsVisible(article, articleWithoutTags, user.username);
});

test(
  'Logged-in user can find own article by Tag ' +
    'from the Popular tags section and view in the Tag Feed.',
  async ({ page, user, internalHomePage, articleWithOneTag }) => {
    await createArticle(page, articleWithOneTag, 1);

    await internalHomePage.open();

    const tagName = articleWithOneTag.tags[0];

    await internalHomePage.popularTags.clickTag(tagName);
    await internalHomePage.tagFeed.assertTabLinkIsVisible(tagName);
    await internalHomePage.tagFeed.open(tagName);

    const article = internalHomePage.tagFeed.articleFeedItem;

    await assertArticleIsVisible(article, articleWithOneTag, user.username);
  },
);
