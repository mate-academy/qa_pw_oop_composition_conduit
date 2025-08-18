import { BaseComponent } from "./BaseComponent"
import { expect } from "allure-playwright";


export class PopularTags extends BaseComponent {

  constructor(page, userId = 0) {
    super(page, userId);
    
    this.popularTagsBlock = this.page.locator('div').filter(
      { hasText: 'Popular Tags' }
    ).nth(4);
  }

  getTagElement(tagName) {
    return this.popularTagsBlock.getByText(tagName);
  }

  async clickTagLink(tagName) {
    await this.step(
      `Click tag link ${tagName} in Popular Tags block`, 
      async () =>{
        await this.getTagElement(tagName).click();
      });
  }
  
  async assertionTagIsVisible(tagName) {
        await this.step(
      `Assertion tag name ${tagName} is visible`, 
      async () =>{
        await expect(this.getTagElement(tagName)).toBeVisible();
      });

  }
}
