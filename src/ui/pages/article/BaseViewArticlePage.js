import { BasePage } from '../BasePage';
import { ArticleContentBlock } from '../../components/articles/ArticleContentBlock';

export class BaseViewArticlePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.article = new ArticleContentBlock(this.page, userId);
  }

  async open(url) {
    await this.step(`Open article page: ${url}`, async () => {
      await this.page.goto(url);
    });
  }

  getCurrentPageUrl() {
    return this.page.url();
  }
}
