import { test } from '../../_fixtures/fixtures';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';

test('Guest can view an article in the Global Feed', async ({ page }) => {
  const externalHomePage = new ExternalHomePage(page);

  await externalHomePage.open();
  await externalHomePage.globalFeed.open();
  await externalHomePage.globalFeed.assertFirstArticleVisible();
});
