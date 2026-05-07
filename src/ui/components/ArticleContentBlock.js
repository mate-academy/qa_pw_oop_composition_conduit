import { BaseArticleContentBlock } from "./BaseArticleContentBlock";

export class ArticleContentBlock extends BaseArticleContentBlock {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);
    this.articleTitleHeader = page.getByRole('heading');
  }
}