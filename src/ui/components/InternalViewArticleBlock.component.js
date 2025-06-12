import { BaseViewArticleBlock } from './BaseViewArticleBlock.component.js';

export class InternalViewArticleBlock extends BaseViewArticleBlock {
  constructor(page, userId = 0) {
    super(page, userId);
  }
}
