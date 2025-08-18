import { test } from '../../_fixtures/fixtures'
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { InternalHeader } from '../../../src/ui/components/header/InternalHeader';


test.describe(
  'Logged user can view own article in other places', 
  () => {
    
    let article;

    test.beforeEach(async ({page, user, articleWithOneTag}) => {
      await signUpUser(page, user, 1);
      article = await createArticle(page, articleWithOneTag, 1);
    });

    test(
      'Logged-in user can view own article in the Global Feed section', 
      async ({ page, internalHomePage, user }) => {
         
        const header = new InternalHeader(page, 1);
        await header.clickHomeLink(); 
        await internalHomePage.globalFeed.open();
        await internalHomePage.globalFeed.assertTabLinkVisible();
        
        await internalHomePage
          .globalFeed
          .articleFeedItem
          .assertArticleCreatedByAuthorIsVisible(user.username);
    });

    test(
      'Logged-in user can find own article by Tag from the Popular tags', 
      async ({ page, internalHomePage, user }) => {
        const articleTag = article.tags[0];
        const header = new InternalHeader(page, 1);
        await header.clickHomeLink(); 
        await internalHomePage.popularTags.assertionTagIsVisible(articleTag);
        await internalHomePage.popularTags.clickTagLink(articleTag);
        await internalHomePage.tagFeedTab.assertLoadingSpinnerToHidden();
        
        await internalHomePage
          .tagFeedTab
          .articleFeedItem
          .assertArticleCreatedByAuthorIsVisible(user.username);
    });
});
