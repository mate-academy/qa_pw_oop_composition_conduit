import { ExternalViewArticleBlock } from '../../components/viewArticle/ExternalViewArticleBlock.js';
import { BaseViewArticlePage } from './BaseViewArticlePage.js';

export class ExternalViewArticlePage extends BaseViewArticlePage {
  viewArticleBlock = new ExternalViewArticleBlock(this.page);
}
