import { test } from '../../_fixtures/fixtures';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';
import { ExternalViewArticlePage } from '../../../src/ui/pages/article/ExternalViewArticlePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.use({ contextsNumber: 2, usersNumber: 1 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  // Author creates an article in the first context
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

// eslint-disable-next-line max-len
test('Not logged in user can open the article page created by other user from the Global Feed section', async ({
  pages,
  articleWithoutTags,
  users,
}) => {
  // Second context stays guest
   await pages[0].waitForTimeout(4000);
   await pages[1].waitForTimeout(4000);
  const guestHome = new ExternalHomePage(pages[1], 2);
  guestHome.open();
  await guestHome.header.clickConduitLogo();
  await guestHome.globalFeed.open();

  // Assert article is visible in Global Feed
  await guestHome.globalFeed.article(articleWithoutTags.title).assertVisible();

  await guestHome.globalFeed.article(articleWithoutTags.title).open();

  // Verify on the article page
  const viewArticle = new ExternalViewArticlePage(pages[1], 2);
  await viewArticle.article.assertTitleIsVisible(articleWithoutTags.title);
  await viewArticle.article.assertTextIsVisible(articleWithoutTags.text);
  await viewArticle.article.assertAuthorNameIsVisible(users[0].username);
});
