import { test } from '../../_fixtures/fixtures';
import { generateNewArticleData } from '../../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

const testParameters = [
  { tagsNumber: 1, testNameEnding: 'one tag' },
];

testParameters.forEach(({ tagsNumber, testNameEnding }) => {
  test.describe('can find own article by Tag from the Popular tags section', () => {
    test.beforeEach(async ({ page, user }) => {
      await signUpUser(page, user);
    });

    test(`Create an article with ${testNameEnding}`, async ({
      internalHomePage,
      createArticlePage,
      externalViewArticlePage,
      logger,
      baseHomePage,
      basePage
    }) => {
      const article = generateNewArticleData(logger, tagsNumber);

      await internalHomePage.header.clickNewArticleLink();

      await createArticlePage.fillTitleField(article.title);
      await createArticlePage.fillDescriptionField(article.description);
      await createArticlePage.fillTextField(article.text);
      await createArticlePage.fillTagsField(article.tags);
      await createArticlePage.clickPublishArticleButton();
      await baseHomePage.baseHeader.clickConduitLogo();
      await basePage.reload();
      await baseHomePage.popularTags.clickTag(article.tags[0]);
      await externalViewArticlePage.articleContentExternal.assertArticleTitleIsVisible(article.title);
    });
  });
});
