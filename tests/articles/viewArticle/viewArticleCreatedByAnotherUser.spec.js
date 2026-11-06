import { test } from '../../_fixtures/fixtures';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';
import { ExternalViewArticlePage } from '../../../src/ui/pages/article/ExternalViewArticlePage';

test('View an article created by another user', async ({ page }) => {
  const externalHomePage = new ExternalHomePage(page);
  const viewArticlePage = new ExternalViewArticlePage(page);

  await externalHomePage.open();
  await externalHomePage.globalFeed.open();
  const articleTitle =
    await externalHomePage.globalFeed.articleFeedItem.firstArticleTitle();
  await externalHomePage.globalFeed.openArticle(articleTitle);

  await viewArticlePage.assertArticleTitleIsVisible(articleTitle);
});
