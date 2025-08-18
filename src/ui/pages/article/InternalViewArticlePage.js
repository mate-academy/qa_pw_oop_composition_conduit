import { BaseViewArticlePage } from './BaseViewArticlePage';

export class InternalViewArticlePage extends BaseViewArticlePage {

  constructor(page, userId = 0) {
    super(page, userId); 
  }
}