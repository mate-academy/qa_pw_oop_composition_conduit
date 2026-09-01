import { BaseArticleContentBlock } from './BaseArticleContentBlock';

export class ArticleContentBlock extends BaseArticleContentBlock {
  constructor(page, userId = 0) {
    super(page, userId);
  }
}
