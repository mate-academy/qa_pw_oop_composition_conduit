import { BaseViewArticleBlock } from './BaseViewArticleBlock';

export class ExternalViewArticleBlock extends BaseViewArticleBlock {
  constructor(page, userId = 0) {
    super(page, userId);
  }
}
