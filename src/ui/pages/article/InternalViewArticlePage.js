import { InternalViewArticleBlock } from '../../components/viewArticle/InternalViewArticleBlock.js';
import { BaseViewArticlePage } from './BaseViewArticlePage.js';

export class InternalViewArticlePage extends BaseViewArticlePage {
  viewArticleBlock = new InternalViewArticleBlock(this.page);
}
