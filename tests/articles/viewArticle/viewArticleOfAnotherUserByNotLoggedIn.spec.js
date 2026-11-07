import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';
import { assertArticleIsVisible } from '../../../src/ui/actions/articles/assertArticleisVisible';
import { expect } from '../../../src/common/helpers/pw';
import { ExternalViewArticlePage } from '../../../src/ui/pages/article/ExternalViewArticlePage';

test.use({ contextsNumber: 2, usersNumber: 1 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  await signUpUser(pages[0], users[0], 1);
  await createArticle(pages[0], articleWithoutTags, 1);
});

async function openGlobalFeedSection(externalHomePage, articleWithoutTags) {
  await externalHomePage.open();
  await externalHomePage.globalFeed.open();

  const article = externalHomePage.globalFeed.articleFeedItem;

  await expect(async () => {
    await externalHomePage.reload();
    await article.assertArticleTitleIsVisible(articleWithoutTags.title);
  }).toPass({ timeout: 20000 });
}

test(
  'Not logged in user can view the article created by other user ' +
    'in the Global Feed section',
  async ({ articleWithoutTags, pages, users }) => {
    const externalHomePage = new ExternalHomePage(pages[1], 2);
    const article = externalHomePage.globalFeed.articleFeedItem;

    await openGlobalFeedSection(externalHomePage, articleWithoutTags);

    await assertArticleIsVisible(
      article,
      articleWithoutTags,
      users[0].username,
    );
  },
);

test(
  'Not logged in user can open the article page created by other user ' +
    'from the Global Feed section',
  async ({ articleWithoutTags, pages, users }) => {
    const externalHomePage = new ExternalHomePage(pages[1], 2);
    const article = externalHomePage.globalFeed.articleFeedItem;

    await openGlobalFeedSection(externalHomePage, articleWithoutTags);
    await article.clickTitle(articleWithoutTags.title);

    const viewArticlePage = new ExternalViewArticlePage(pages[1], 2);

    await viewArticlePage.articleContent.assertArticleTitleIsVisible(
      articleWithoutTags.title,
    );
    await viewArticlePage.articleContent.assertArticleTextIsVisible(
      articleWithoutTags.text,
    );
    await viewArticlePage.articleContent.assertArticleAuthorNameIsVisible(
      users[0].username,
    );
  },
);
