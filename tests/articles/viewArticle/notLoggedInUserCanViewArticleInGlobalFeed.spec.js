import { test } from '../../_fixtures/fixtures';
import { ExternalViewArticlePage } from '../../../src/ui/pages/article/ExternalViewArticlePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

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

  await externalViewArticlePage.articleContent.assertArticleTitleIsVisible(
    articleWithoutTags.title,
  );
  await externalViewArticlePage.articleContent.assertArticleTextIsVisible(
    articleWithoutTags.text,
  );
  await externalViewArticlePage.articleContent.assertArticleAuthorNameIsVisible(
    users[0].username,
  );
});
