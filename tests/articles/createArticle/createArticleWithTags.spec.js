import { test } from '../../_fixtures/fixtures';
import { generateNewArticleData } from '../../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

const testParameters = [
  { tagsNumber: 1, testNameEnding: 'one tag' },
  { tagsNumber: 2, testNameEnding: 'two tags' },
  { tagsNumber: 10, testNameEnding: 'ten tags' },
];

testParameters.forEach(({ tagsNumber, testNameEnding }) => {
  test.describe('Create an article with tags', () => {
    test.beforeEach(async ({ page, user }) => {
      await signUpUser(page, user, 1);
    });

    test(`Create an article with ${testNameEnding}`, async ({
      internalHomePage,
      createArticlePage,
      internalViewArticlePage,
      logger,
    }) => {
      const article = generateNewArticleData(logger, tagsNumber);

      await internalHomePage.header.clickNewArticleLink();

      await createArticlePage.fillTitleField(article.title);
      await createArticlePage.fillDescriptionField(article.description);
      await createArticlePage.fillTextField(article.text);
      await createArticlePage.fillTagsField(article.tags);
      await createArticlePage.clickPublishArticleButton();

      await internalViewArticlePage.article.assertTitleIsVisible(article.title);
      await internalViewArticlePage.article.assertTextIsVisible(article.text);
      await internalViewArticlePage.article.assertArticleTagsAreVisible(article.tags);
    });
  });
});