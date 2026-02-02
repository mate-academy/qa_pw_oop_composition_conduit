import { BaseViewArticleBlock } from './BaseViewArticleBlock';

export class InternalViewArticleBlock extends BaseViewArticleBlock {
  constructor(page, userId = 0) {
    super(page, userId);
  }
}
