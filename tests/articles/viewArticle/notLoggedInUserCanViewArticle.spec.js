import { test } from '../../_fixtures/fixtures';
import { BaseHomePage } from '../../../src/ui/pages/home/BaseHomePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';

test.use({ contextsNumber: 2, usersNumber: 2 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await signUpUser(pages[1], users[1], 2);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('Not logged in user can view the article created by other user in the Global Feed section', async ({
  articleWithoutTags,
  pages,
  users,
  viewArticlePage
}) => {
  const homePage = new BaseHomePage(pages[1], 2);
  const internalHomePage = new InternalHomePage(pages[1], 2);

  await homePage.baseHeader.clickSettingsLink();
  await internalHomePage.clickLogOutLink();

  await viewArticlePage.articleContentExternal.assertArticleTitleIsVisible(articleWithoutTags.title);
  await viewArticlePage.articleContentExternal.assertArticleTextIsVisible(articleWithoutTags.text);
  await viewArticlePage.articleContentExternal.assertArticleAuthorNameIsVisible(users[0].username);
});
