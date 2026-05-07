import { BaseArticleContentBlock } from "./BaseArticleContentBlock";

export class AuthorsArticleContentBlock extends BaseArticleContentBlock {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);
  }
}