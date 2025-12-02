import { test } from '../../_fixtures/fixtures';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.use({ contextsNumber: 2, usersNumber: 2 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('View an article created by another user in Global Feed', async ({
  articleWithoutTags,
  pages,
  users,
}) => {
  const internalHomePage = new InternalHomePage(pages[1], 2);

  await internalHomePage.open();
  await internalHomePage.globalFeed.open();

  const articleItem = internalHomePage.globalFeed.articleFeedItem;

  await articleItem.assertArticleVisible(users[0].username);

  await articleItem.assertArticleTitleContainsText(
    users[0].username,
    articleWithoutTags.title,
  );
  await articleItem.assertArticleDescriptionContainsText(
    users[0].username,
    articleWithoutTags.description,
  );
  await articleItem.assertArticleTagsAreCorrect(
    users[0].username,
    articleWithoutTags.tags,
  );
});
