import { test } from '../../_fixtures/fixtures';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';

test.beforeEach(async ({ page, user, articleWithOneTag }) => {
  await signUpUser(page, user, 1);
  await createArticle(page, articleWithOneTag, 1);
});

test.only('View own article in the tag feed tab', async ({
  articleWithOneTag,
  page,
}) => {
  const homePage = new InternalHomePage(page, 1);

  await homePage.open();
  await homePage.popularTags.clickTag(articleWithOneTag.tags[0]);
  await homePage.tagFeed.assertVisible(articleWithOneTag.tags[0]);
  await homePage.tagFeed.articlePreview.assertArticleIsVisible(articleWithOneTag.title)
});

test.afterEach(async ({ page}) => {
  await page.close();
});
