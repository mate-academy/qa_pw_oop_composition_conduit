import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { TITLE_CANNOT_BE_EMPTY } from '../../../src/ui/constants/articleErrorMessages';
import { InternalHomePage } from '../../../src/ui/pages/home/InternalHomePage';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Create an article without required fields', async ({
  page,
  createArticlePage,
}) => {
  const internalHomePage = new InternalHomePage(page, 1);
  await internalHomePage.header.clickNewArticleLink();

  await createArticlePage.clickPublishArticleButton();
  await createArticlePage.assertErrorMessageContainsText(TITLE_CANNOT_BE_EMPTY);
});
