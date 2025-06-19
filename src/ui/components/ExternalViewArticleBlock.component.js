import { BaseViewArticleBlock } from './BaseViewArticleBlock.component.js';

export class ExternalViewArticleBlock extends BaseViewArticleBlock {
  constructor(page, userId = 0) {
    super(page, userId);
  }
}
