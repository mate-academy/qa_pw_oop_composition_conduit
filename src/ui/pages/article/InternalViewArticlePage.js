import { BaseViewArticlePage } from './BaseViewArticlePage';
import { AuthorsArticleContentBlock } from '../../components/AuthorsArticleContentBlock'
import { ArticleContentBlock } from '../../components/ArticleContentBlock'

export class InternalViewArticlePage extends BaseViewArticlePage {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);
    this.articleTitleHeader = page.getByRole('heading');
    this.authorsArticleContentBlock =
      new AuthorsArticleContentBlock(this.page, userId);
    this.articleContentBlock =
      new ArticleContentBlock(this.page, userId);
  }
}
