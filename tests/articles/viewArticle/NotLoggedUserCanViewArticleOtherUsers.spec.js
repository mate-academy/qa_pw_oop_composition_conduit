import { test } from '../../_fixtures/fixtures'
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';
import { InternalViewArticlePage } from '../../../src/ui/pages/article/InternalViewArticlePage';


test.use({ contextsNumber: 2 });

test.describe( 
  'Not logged user can view article that created other user', () => {

    let article;
    test.beforeEach(async ({pages, user, articleWithOneTag }) => {
      await signUpUser(pages[0], user, 1);
      article = await createArticle(pages[0], articleWithOneTag, 1)
    })

    test(
      'Not logged in user can view the article in the Global Feed section', 
      async ({ pages, user }) => {
        const externalHomePage = new ExternalHomePage(pages[1], 2);
        await externalHomePage.open();
        await externalHomePage.header.clickHomeLink();
        await externalHomePage.globalFeed.open();
        await externalHomePage.globalFeed.assertTabLinkVisible();
       
        await externalHomePage
          .globalFeed
          .articleFeedItem
          .assertArticleCreatedByAuthorIsVisible(user.username, 10);

    });

    test(
      'Not logged user can open the article from the Global Feed section', 
      async ({ pages, user }) => {
        
        const externalHomePage = new ExternalHomePage(pages[1], 2)
        await externalHomePage.open();
        await externalHomePage.header.clickHomeLink();
        await externalHomePage.globalFeed.open();
        await externalHomePage.globalFeed.assertTabLinkVisible();
        await externalHomePage
          .globalFeed
          .articleFeedItem
          .assertArticleCreatedByAuthorIsVisible(user.username, 10);
        
        await externalHomePage
          .globalFeed
          .articleFeedItem
          .openArticlePage(article.title);

        const internalViewArticlePage =  new InternalViewArticlePage(
          pages[1], 1
        );

        await internalViewArticlePage
          .articleContentBlock
          .assertArticleAuthorIsVisible(user.username);
        
        await internalViewArticlePage
          .articleContentBlock
          .assertArticleTitleIsVisible(article.title);
  });
})
