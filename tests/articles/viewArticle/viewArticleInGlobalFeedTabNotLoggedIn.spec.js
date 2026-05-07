import { test } from '../../_fixtures/fixtures';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.use({ contextsNumber: 2});

test.beforeEach(async ({ pages, user, articleWithoutTags }) => {
  await signUpUser(pages[0], user, 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('View article in Global Feed tab', async ({
  articleWithoutTags,
  pages,
}) => {
  const externalHomePage = new ExternalHomePage(pages[1], 2);

  await externalHomePage.open();
  await externalHomePage.globalFeed.assertTabLinkVisible();
  await externalHomePage.globalFeed.articleFeedItem.
  assertArticleTitleContainText(articleWithoutTags.title);
});
