import { BaseComponent } from '../BaseComponent';
import { expect } from '../../../common/helpers/pw';

export class BaseArticleContentBlock extends BaseComponent {
  #container = this.page.locator('.article-page');
  #title     = this.#container.locator('.banner h1');
  #authorHdr = this.#container.locator('.banner .article-meta .author');
  #body      = this.#container.locator('.article-content');
  #tags      = this.#container.locator('.tag-list li');

  async expectTitleToBe(title) {
    await this.step(`Assert article title '${title}' is visible`, async () => {
      await expect(this.#title).toHaveText(title);
    });
  }

  async expectBodyToContain(text) {
    await this.step(`Assert article body contains text`, async () => {
      await expect(this.#body).toContainText(text);
    });
  }

  async expectAuthorToContain(name) {
    await this.step(`Assert author '${name}' is visible`, async () => {
      await expect(this.#authorHdr).toContainText(name);
    });
  }

  async expectTagsVisible(tags = []) {
    await this.step(`Assert tags are visible: ${tags.join(', ')}`, async () => {
      for (const tag of tags) {
        await expect(this.#tags.filter({ hasText: tag })).toBeVisible();
      }
    });
  }
}