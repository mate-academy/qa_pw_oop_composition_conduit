import { BaseViewArticlePage } from './BaseViewArticlePage';
import {AuthorsArticleContentBlock} from '../../components/AuthorsArticleContentBlock'

export class InternalViewArticlePage extends BaseViewArticlePage {

  constructor(page, userId = 0) {
    super(page, userId); 

    this.authorsArticleContentBlock = new AuthorsArticleContentBlock(
      page, userId
    );
  }
}