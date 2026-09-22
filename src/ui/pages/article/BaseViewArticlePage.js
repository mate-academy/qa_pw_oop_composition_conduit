import { BasePage } from '../BasePage';
import { expect } from '../../../common/helpers/pw';
import { ArticleContentBlock } from '../../components/article/ArticleContentBlock';

export class BaseViewArticlePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);

    this.articleContentBlock = new ArticleContentBlock(page, userId);
  }

  async assertArticleIsOpened(articleUrl) {
    await this.step(`Assert ${this._pageName()} page is opened`, async () => {
      await this.page.waitForURL(articleUrl);
      await expect(this.page).toHaveURL(articleUrl);
    });
  }
}
