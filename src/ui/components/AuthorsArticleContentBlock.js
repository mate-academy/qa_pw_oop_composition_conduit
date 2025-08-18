import { BaseArticleContentBlock }  from '../components/BaseArticleContentBlock'


export class AuthorsArticleContentBlock extends BaseArticleContentBlock {
  constructor(page, userId = 0) {
    super(page, userId);
  }
}