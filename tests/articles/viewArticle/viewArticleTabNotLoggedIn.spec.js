import { test } from '../../_fixtures/fixtures';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';
import { ExternalViewArticlePage } from '../../../src/ui/pages/article/ExternalViewArticlePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.use({ contextsNumber: 2});

test.beforeEach(async ({ pages, user, articleWithoutTags }) => {
  await signUpUser(pages[0], user, 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('Click on article in Global Feed tab', async ({
  articleWithoutTags,
  pages,
}) => {
  const externalHomePage = new ExternalHomePage(pages[1], 2);
  const externalViewArticlePage = new ExternalViewArticlePage(pages[1], 2)

  await externalHomePage.open();
  await externalHomePage.globalFeed.assertTabLinkVisible();
  await externalHomePage.globalFeed.articleFeedItem.
    assertArticleTitleIsVisible();
  await externalHomePage.globalFeed.articleFeedItem.clickOnArticle();
  await externalViewArticlePage.
    assertArticleTitleContainText(articleWithoutTags.title);
});
