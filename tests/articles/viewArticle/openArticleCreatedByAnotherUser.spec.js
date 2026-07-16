import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';
import { ExternalViewArticlePage } from '../../../src/ui/pages/article/ExternalViewArticlePage';

test.use({ contextsNumber: 1, usersNumber: 1 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('Open an article created by another user', async ({
  articleWithoutTags, page
}) => {
  const internalHomePage = new InternalHomePage(page);
  const externalViewArticlePage = new ExternalViewArticlePage(page);

  await internalHomePage.open();
  await internalHomePage.globalFeed.articleFeedItem.clickArticle(
    articleWithoutTags.title,
  );
  await externalViewArticlePage.articleContentBlock.assertArticleTitleIsVisible(
    articleWithoutTags.title,
  );
});
