import { expect } from '../../../common/helpers/pw' 
import { ArticleListItem } from "../ArticleListItem";
import { BaseComponent } from "../BaseComponent";

export class TagFeedTab extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleListItem = new ArticleListItem(page, userId);
    this.feedToggle = page.locator('.feed-toggle');
    this.feedTab = this.feedToggle.getByRole('listitem');
  }

  async assertVisible(tagFeedName) {
    await this.step(`Assert 'Tag Feed' is visible`, async () => {
      await expect(this.feedTab.filter({ hasText: tagFeedName })).toBeVisible();
    });
  }
}