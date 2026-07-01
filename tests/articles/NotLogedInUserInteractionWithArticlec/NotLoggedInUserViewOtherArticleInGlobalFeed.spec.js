import { test } from '../../_fixtures/fixtures';
import { ExternalViewArticlePage } from '../../../src/ui/pages/article/ExternalViewArticlePage';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';

test.use({ contextsNumber: 2, usersNumber: 2 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('Not logged in user can view the article created by other user in the Global Feed section', async ({
  articleWithoutTags,
  pages,
  users,
}) => {
  const externalViewArticlePage = new ExternalViewArticlePage(pages[1], 2);
  
  await externalViewArticlePage.open(articleWithoutTags.url);
  await externalViewArticlePage.authorsArticleContentBlock.assertArticleTitleIsVisible(
    articleWithoutTags.title,
  );
  await externalViewArticlePage.articleContentBlock.assertArticleTextIsVisible(
    articleWithoutTags.text,
  );
  await externalViewArticlePage.articleContentBlock.assertArticleAuthorNameIsVisible(
    users[0].username,
  );
});