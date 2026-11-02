import { BasePage } from '../BasePage';
import { ArticleContentBlock } from '../../components/ArticleContentBlock';

export class BaseViewArticlePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);

    this.articleContent = new ArticleContentBlock(page, userId);
  }

  async assertArticleTitleIsVisible(title) {
    await this.articleContent.assertArticleTitleIsVisible(title);
  }

  async assertArticleAuthorNameIsVisible(username) {
    await this.articleContent.assertArticleAuthorNameIsVisible(username);
  }

  async assertArticleTextIsVisible(text) {
    await this.articleContent.assertArticleTextIsVisible(text);
  }

  async assertArticleTagsAreVisible(tags) {
    await this.articleContent.assertArticleTagsAreVisible(tags);
  }
}
