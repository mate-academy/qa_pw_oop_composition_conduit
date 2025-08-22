import { test } from '../../_fixtures/fixtures';
import { InternalViewArticlePage } from '../../../src/ui/pages/article/InternalViewArticlePage';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.use({ contextsNumber: 2, usersNumber: 2 });

test.beforeEach(async ({ pages, users, articleWithOneTag }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithOneTag, 1);
});

test('View an and open article created by another', async ({
  articleWithOneTag,
  pages,
  users,
}) => {
  const internalHomePage = new InternalHomePage(pages[1], 2);

  await internalHomePage.open();
  await internalHomePage.globalFeed.open();

  const articleItem = internalHomePage.globalFeed.articleFeedItem;

  await articleItem.assertArticleVisible(users[0].username);
  await articleItem.clickOnAuthorArticle(users[0].username);

  const internalViewArticlePage = new InternalViewArticlePage(pages[1], 2);
  const articleBlock = internalViewArticlePage.articleContentBlock;

  await articleBlock.assertArticleUrlIsCorrect(articleWithOneTag.url);
  await articleBlock.assertArticleTitleIsVisible(articleWithOneTag.title);
  await articleBlock.assertArticleTextIsVisible(articleWithOneTag.text);
  await articleBlock.assertArticleTagsAreVisible(articleWithOneTag.tags);
  await articleBlock.assertArticleAuthorNameIsVisible(users[0].username);
});
