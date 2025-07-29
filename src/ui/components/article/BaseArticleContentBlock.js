import { BaseComponent } from '../BaseComponent';
import { expect } from '../../../common/helpers/pw';

export class BaseArticleContentBlock extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
  }
}
