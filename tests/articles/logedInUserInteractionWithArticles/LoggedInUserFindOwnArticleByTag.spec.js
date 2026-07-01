import { test } from '../../_fixtures/fixtures';
import { SignInPage } from '../../../src/ui/pages/auth/SignInPage';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';

let signInPage;
let homePage;

test.use({ contextsNumber: 2 });

test.beforeEach(async ({ pages, user }) => {
  await signUpUser(pages[0], user);

  signInPage = new SignInPage(pages[1]);
  homePage = new InternalHomePage(pages[1]);
});

test('Logged in user can find own article by tag in the Tag Feed', async ({
  articleWithOneTag,
  user,
  pages,
}) => {
  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(user.password);
  await signInPage.clickSignInButton();
  await homePage.yourFeed.assertTabLinkVisible();

  await createArticle(pages[1], articleWithOneTag, 1);
  await homePage.open();
  await homePage.clickOnTagLink(articleWithOneTag.tags[0]);

  await homePage.tagFeedTab.articleFeedItem.assertArticleTitleIsVisible(
    articleWithOneTag.title,
  );
  await homePage.tagFeedTab.articleFeedItem.assertArticleAuthorNameIsVisible(
    user.username,
  );
});