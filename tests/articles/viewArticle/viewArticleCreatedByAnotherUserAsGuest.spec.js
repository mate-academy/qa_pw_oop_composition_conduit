import { reloadUntil } from '../../../src/common/helpers/pw';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { ExternalViewArticlePage } from '../../../src/ui/pages/article/view/ExternalViewArticlePage';
import { ExternalHomePage } from '../../../src/ui/pages/home/ExternalHomePage';
import { test } from '../../_fixtures/fixtures';

test.describe('Article by another user (guest)', () => {
  test.use({ contextsNumber: 2 });

  test.beforeEach(async ({ user, pages, articleWithoutTags }) => {
    await signUpUser(pages[0], user, 1);
    await createArticle(pages[0], articleWithoutTags);
  });

  test('View an article in the global feed', async ({
    pages,
    user,
  }) => {
    const externalHomePage = new ExternalHomePage(pages[1]);

    await externalHomePage.open();

    await externalHomePage.globalFeedTab.open();

    const callback = async () => {
      await externalHomePage.globalFeedTab.articleFeedItem
        .assertArticleContainsAuthorName(
          user.username,
        );
    };

    await reloadUntil(pages[1], callback, {timeout: 30000});
  });

  test('Open the article page', async ({
    pages,
    user,
    articleWithoutTags,
  }) => {
    const externalViewArticlePage = new ExternalViewArticlePage(pages[1]);

    await externalViewArticlePage.open(articleWithoutTags.url);

    await externalViewArticlePage.articleContentBlock
      .assertArticleAuthorNameIsVisible(
        user.username,
      );

    await externalViewArticlePage.articleContentBlock
      .assertArticleTitleIsVisible(
        articleWithoutTags.title,
      );

    await externalViewArticlePage.articleContentBlock
      .assertArticleTextIsVisible(
        articleWithoutTags.text,
      );
  });
});
