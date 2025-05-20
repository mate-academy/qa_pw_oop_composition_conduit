import { expect } from '../../../common/helpers/pw' 
import { ArticlePreview } from "../ArticlePreview";
import { BaseComponent } from "../BaseComponent";

export class TagFeed extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articlePreview = new ArticlePreview(page, userId);
    this.feedToggle = page.locator('.feed-toggle');
    this.feedTab = this.feedToggle.getByRole('listitem');
  }

  async assertVisible(tagFeedName) {
    await this.step(`Assert 'Tag Feed' is visible`, async () => {
      await expect(this.feedTab.filter({ hasText: tagFeedName })).toBeVisible();
    });
  }
}