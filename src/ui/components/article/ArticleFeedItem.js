import { BaseComponent } from '../BaseComponent';
import { expect } from '../../../common/helpers/pw';

export class ArticleFeedItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articlePreview = this.page.locator('.article-preview');
  }

  articlePreviewLocatorByName(arctileName) {
    return this.articlePreview.getByText(arctileName);
  }

  async assertArticleIsShownInTheList(arctileName) {
    await this.step(
      `Assert article ${arctileName} is visible in the list`,
      async () => {
        await expect(
          this.articlePreviewLocatorByName(arctileName),
        ).toBeVisible();
      },
    );
  }

  async assertArticleHasTag(arctileName, tagName) {
    await this.step(`Assert article has ${tagName} tag`, async () => {
      await expect(
        this.articlePreview.filter({ hasText: arctileName }).locator('.tag-list'),
      ).toContainText(tagName);
    });
  }

  async openArctileFromTheFeed(arctileName) {
    await this.step(`Click on the article to open`, async () => {
      await this.articlePreviewLocatorByName(arctileName).click();
    });
  }
}
