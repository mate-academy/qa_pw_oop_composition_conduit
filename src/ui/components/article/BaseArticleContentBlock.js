import { BaseComponent } from '../BaseComponent';

export class BaseArticleContentBlock extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);

    this._banner = this.page.locator('.banner');
    this._articleContent = this.page.locator('.article-content');
  }
}
