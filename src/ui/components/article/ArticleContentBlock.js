import { BaseArticleContentBlock } from './BaseArticleContentBlock';
import { expect } from '../../../common/helpers/pw';

export class ArticleContentBlock extends BaseArticleContentBlock {
  constructor(page, userId = 0) {
    super(page, userId);
  }

  followButton(username) {
    return this.page
      .getByRole('button', { name: `Follow ${username}` })
      .first();
  }

  favoriteButton() {
    return this.page.getByRole('button', { name: /Favorite Article/ }).first();
  }

  async clickFollowButton(username) {
    await this.step(`Click 'Follow ${username}' button`, async () => {
      await this.followButton(username).click();
    });
  }

  async clickFavoriteButton() {
    await this.step(`Click 'Favorite Article' button`, async () => {
      await this.favoriteButton().click();
    });
  }

  async assertFollowButtonVisible(username) {
    await this.step(
      `Assert 'follow ${username} button is visible`,
      async () => {
        await expect(this.followButton(username)).toBeVisible();
      },
    );
  }
}
