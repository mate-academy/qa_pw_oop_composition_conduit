import { BasePage } from '../BasePage';
import { ArticleContentBlock } from '../../components/ArticleContentBlock';

export class BaseViewArticlePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleContentBlock = new ArticleContentBlock(this.page, this.userId);
  }

  async assertArticleTitleIsVisible(title) {
    await this.articleContentBlock.assertArticleTitleIsVisible(title);
  }

  async assertArticleAuthorNameIsVisible(username) {
    await this.articleContentBlock.assertArticleAuthorNameIsVisible(username);
  }

  async assertArticleTextIsVisible(text) {
    await this.articleContentBlock.assertArticleTextIsVisible(text);
  }

  async assertArticleTagsAreVisible(tags) {
    await this.articleContentBlock.assertArticleTagsAreVisible(tags);
  }
}
