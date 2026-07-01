
import{ BaseComponent } from "./BaseComponent.js";

export class PopularTags extends BaseComponent{
 constructor(page, userId = 0) {
    super(page, userId);
 }

 async clickOnTagLink(tag) {
    await this.step(`Click on tag link '${tag}'`, async () => {
         await this.page.locator('a').filter({ hasText: tag }).first().click();
    });
 }
}