import { BaseComponent } from "./BaseComponent";
import { expect } from "allure-playwright";


export class BaseArticleContentBlock extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
      
    }

    getTitleLocator(titleName) {
      return this.page.getByRole('heading', { name: titleName })
    }

    getAuthorLocator(authorName) {
      return this.page.getByRole('link', { name: authorName }).nth(1)
    }

   
    async assertArticleTitleIsVisible(titleName) {
      await this.step(`Assert the article is visible title`, async () => {
        await expect(this.getTitleLocator(titleName)).toBeVisible();
      });
    }

    async assertArticleAuthorIsVisible(authorName) {
      await this.step(
        `Assert the article author is visible title`, 
        async () => {
          await expect(this.getAuthorLocator(authorName)).toBeVisible();
      });
    }
}
