import { BaseArticleContentBlock } from './BaseArticleContentBlock';

export class ArticleContentBlock extends BaseArticleContentBlock {
  async assertTitleIsVisible(title) {
    await this.expectTitleToBe(title);
  }
  async assertTextIsVisible(text) {
    await this.expectBodyToContain(text);
  }
  async assertAuthorNameIsVisible(name) {
    await this.expectAuthorToContain(name);
  }
  async assertArticleTagsAreVisible(tags) {
    await this.expectTagsVisible(tags);
  }
}
