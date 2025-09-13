import { test } from '../../_fixtures/fixtures';
import { ExternalViewArticlePage } from '../../../src/ui/pages/article/ExternalViewArticlePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.use({ contextsNumber: 2, usersNumber: 2 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1); // author
  await signUpUser(pages[1], users[1], 2); // another user (viewer)
  await createArticle(pages[0], articleWithoutTags, 1); // adds articleWithoutTags.url
});

test('View an article created by another user', async ({
  articleWithoutTags,
  pages,
  users,
}) => {
  const viewArticlePage = new ExternalViewArticlePage(pages[1], 2);

  await viewArticlePage.open(articleWithoutTags.url);

  await viewArticlePage.article.assertTitleIsVisible(articleWithoutTags.title);
  await viewArticlePage.article.assertTextIsVisible(articleWithoutTags.text);
  await viewArticlePage.article.assertAuthorNameIsVisible(users[0].username);
});

