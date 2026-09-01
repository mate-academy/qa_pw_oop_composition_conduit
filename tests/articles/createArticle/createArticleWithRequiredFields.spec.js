import { test } from '../../_fixtures/fixtures';
import { generateNewArticleData } from '../../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';
import { InternalViewArticlePage } from '../../../src/ui/pages/article/InternalViewArticlePage';

let article;

test.beforeEach(async ({ page, user, logger }) => {
  article = generateNewArticleData(logger);

  await signUpUser(page, user);
});

test('Create an article with required fields', async ({
  createArticlePage,
  page,
}) => {
  const internalHomePage = new InternalHomePage(page, 1);
  const internalViewArticlePage = new InternalViewArticlePage(page, 1);
  await internalHomePage.header.clickNewArticleLink();

  await createArticlePage.fillTitleField(article.title);
  await createArticlePage.fillDescriptionField(article.description);
  await createArticlePage.fillTextField(article.text);
  await createArticlePage.clickPublishArticleButton();

  await internalViewArticlePage.articleContentBlock.assertArticleTitleIsVisible(
    article.title,
  );
  await internalViewArticlePage.articleContentBlock.assertArticleTextIsVisible(
    article.text,
  );
});
