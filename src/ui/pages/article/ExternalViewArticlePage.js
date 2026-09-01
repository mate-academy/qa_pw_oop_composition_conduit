import { BaseViewArticlePage } from '../article/BaseViewArticlePage';

export class ExternalViewArticlePage extends BaseViewArticlePage {
  constructor(page, userId = 0) {
    super(page, userId);
  }
}
