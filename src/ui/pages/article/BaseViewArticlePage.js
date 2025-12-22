import { BasePage } from '../BasePage';
import { ArticleContentBlock } from '../../components/ArticleContentBlock';

export class BaseViewArticlePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleContent = new ArticleContentBlock(page);
  }

  async getTitle() {
    return await this.articleContent.getTitle();
  }

  async getContent() {
    return await this.articleContent.getContent();
  }

  async getAuthor() {
    return await this.articleContent.getAuthor();
  }

  async getTags() {
    return await this.articleContent.getTags();
  }
}
