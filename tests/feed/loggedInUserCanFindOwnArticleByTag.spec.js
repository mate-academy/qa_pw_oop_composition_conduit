import { test } from '../_fixtures/fixtures';
import { createArticle } from '../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { InternalHomePage } from '../../src/ui/pages/home/InternalHomePage';

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
  const homePage = new InternalHomePage(pages[0], 1);

  await homePage.open();
  await homePage.waitAndReload(() =>
    homePage.popularTags.assertTagIsVisible(articleWithOneTag.tags[0]),
  );

  const clickAndAssert = async () => {
    await homePage.popularTags.assertTagIsVisible(articleWithOneTag.tags[0]);
    await homePage.popularTags.clickTagLink(articleWithOneTag.tags[0]);
    await homePage.tagFeed.assertTagFeedIsVisible(articleWithOneTag.tags[0]);
    await homePage.tagFeed.articleFeedItem.assertArticleAuthorIsVisible(
      users[0].username,
    );
    await homePage.tagFeed.articleFeedItem.assertArticleTagIsVisible(
      articleWithOneTag.tags[0],
    );
  };

  await homePage.waitAndReload(clickAndAssert);
});
