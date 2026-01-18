import { BaseViewArticlePage } from './BaseViewArticlePage';
import { AuthorsArticleContentBlock } from '../../components/AuthorsArticleContentBlock';

export class InternalViewArticlePage extends BaseViewArticlePage {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);
    this.authorsArticleContent = new AuthorsArticleContentBlock(
      this.page,
      userId,
    );
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
