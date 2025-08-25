import { BaseComponent } from '../BaseComponent';
import { expect } from '../../../common/helpers/pw';

export class ArticleListItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
  }
}
