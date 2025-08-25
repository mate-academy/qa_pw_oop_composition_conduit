import { BaseViewArticlePage } from './BaseViewArticlePage';
import { InternalHomePage } from '../../home/InternalHomePage';
import { ArticleListItem } from '../../../components/article/ArticleListItem';
import { AuthorsArticleContentBlock } from '../../../components/article/AuthorsArticleContentBlock';

export class InternalHomePage extends BaseViewArticlePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleListItem = new ArticleListItem(this.page, userId);
    this.authorsArticleContentBlock = new AuthorsArticleContentBlock(this.page, userId);
  }
}
