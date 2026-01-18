import { test } from '../../_fixtures/fixtures';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.use({ contextsNumber: 1, usersNumber: 1 });

test.beforeEach(async ({ pages, users, articleWithOneTag }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithOneTag, 1);
});

test('Logged-in user can find own article by Tag from the Popular tags section and view in the Tag Feed', async ({
  articleWithOneTag,
  pages,
  users,
}) => {
  const internalHomePage = new InternalHomePage(pages[0], 1);

  await internalHomePage.open();
  await internalHomePage.popularTags.clickTag(articleWithOneTag.tags[0]);

  await internalHomePage.tagFeed.assertTabLinkVisible(
    articleWithOneTag.tags[0],
  );

  await internalHomePage.tagFeed.articleFeedItem.assertArticleVisible(
    articleWithOneTag.title,
  );
  await internalHomePage.tagFeed.articleFeedItem.assertArticleAuthor(
    articleWithOneTag.title,
    users[0].username,
  );
});
