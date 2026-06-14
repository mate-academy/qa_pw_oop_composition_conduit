import { test } from '../../_fixtures/fixtures';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test.beforeEach(async ({ page, user, articleWithOneTag }) => {
  await signUpUser(page, user);
  await createArticle(page, articleWithOneTag);
});

test('Logged-in user can find own article by Tag from the' + 
  ' Popular tags section and view in the Tag Feed', async ({
  articleWithOneTag,
  page,
  user,
}) => {
  const internalHomePage = new InternalHomePage(page);

  await internalHomePage.open();
  await internalHomePage.popularTags.assertSidebarVisible();
  await internalHomePage.popularTags
    .assertTagIsVisible(articleWithOneTag.tags[0]);
  await internalHomePage.popularTags
    .assertTagClickable(articleWithOneTag.tags[0]);
  await internalHomePage.popularTags
    .clickTag(articleWithOneTag.tags[0]);

  await internalHomePage.tagFeedTab
    .assertTabLinkVisible(articleWithOneTag.tags[0]);
  
  await internalHomePage.tagFeedTab
    .assertArticleTitleIsVisible(articleWithOneTag.title)

  await internalHomePage.tagFeedTab
    .assertArticleDescriptionIsVisible(articleWithOneTag.title,
      articleWithOneTag.description)

  await internalHomePage.tagFeedTab
    .assertArticleAuthorNameIsVisible(articleWithOneTag.title, user.username)
});
