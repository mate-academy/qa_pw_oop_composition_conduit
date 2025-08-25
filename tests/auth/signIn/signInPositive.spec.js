import { test } from '../../_fixtures/fixtures';
import { SignInPage } from '../../../src/ui/pages/auth/SignInPage';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { GlobalFeedTab } from '../../../src/ui/components/GlobalFeedTab';

let signInPage;
let homePage;
let globalFeedTab;

test.use({ contextsNumber: 2 });

test.beforeEach(async ({ pages, user }) => {
  await signUpUser(pages[0], user);

  signInPage = new SignInPage(pages[1]);
  homePage = new InternalHomePage(pages[1]);
  globalFeedTab = new GlobalFeedTab(pages[1]);
});

test('Successful `Sign in` flow test', async ({ user }) => {
  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(user.password);
  await signInPage.clickSignInButton();

  await homePage.yourFeed.assertTabLinkVisible();
});

test('Global articles are displayed', async ({ user }) => {
  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(user.password);
  await signInPage.clickSignInButton();

  await homePage.yourFeed.assertTabLinkVisible();
  await globalFeedTab.clickGlobalFeedTab();
  await globalFeedTab.articleListItem.assertGlobalListArticlesIsVisible();
});
