import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class ArticleFeedItem extends BaseComponent {
  #articleLink;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#articleLink = this.page.getByText('Article Title');
  }
}
