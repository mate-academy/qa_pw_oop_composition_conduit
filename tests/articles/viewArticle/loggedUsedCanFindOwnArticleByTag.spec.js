import { test } from '../../_fixtures/fixtures';
import { InternalViewArticlePage } from '../../../src/ui/pages/article/InternalViewArticlePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';

test.use({ contextsNumber: 1, usersNumber: 1 });

test.beforeEach(async ({ pages, users, articleWithOneTag }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithOneTag, 1);
});

test('Logged-in user can find own article by Tag from the Popular tags section and view in the Tag', async ({
  articleWithOneTag,
  pages,
  users,
}) => {
  const internalViewArticlePage = new InternalViewArticlePage(pages[0], 1);
  const internalHomePage = new InternalHomePage(pages[0], 1);

  await internalHomePage.open();
  await internalHomePage.popularTags.openTag(articleWithOneTag.tags[0]);
  await internalHomePage.tagFeedTab.assertTabIsActive(
    articleWithOneTag.tags[0],
  );
  await internalHomePage.tagFeedTab.articleFeedItem.assertArticleIsVisible(
    articleWithOneTag.title,
  );
});
