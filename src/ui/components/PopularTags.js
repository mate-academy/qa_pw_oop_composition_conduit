import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class PopularTags extends BaseComponent {
  #root;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#root = this.page.locator('.sidebar');
  }

  async #waitForAnyTag(timeout = 15000) {
    const first = this.page.locator('.sidebar .tag-list a').first();
    await first.waitFor({ state: 'visible', timeout });
    return first;
  }

  // robust link finder: CSS + hasText, tolerant to whitespace/newlines
  tagLink(tag) {
    const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return this.#root
      .locator('.tag-list a')
      .filter({ hasText: new RegExp(`^\\s*${esc(tag)}\\s*$`, 'i') });
  }

  async firstTagText(timeout = 15000) {
    const first = await this.#waitForAnyTag(timeout);
    return (await first.innerText()).trim();
  }

  async click(tag, timeout = 15000) {
    await this.#waitForAnyTag(timeout);
    await this.step(`Click popular tag '${tag}'`, async () => {
      await this.tagLink(tag).click();
    });
  }

  async assertVisible(tag, timeout = 15000) {
    await this.#waitForAnyTag(timeout);
    await this.step(`Assert popular tag '${tag}' is visible`, async () => {
      await expect(this.tagLink(tag)).toBeVisible();
    });
  }

  async assertAnyTagVisible(timeout = 15000) {
    const first = await this.#waitForAnyTag(timeout);
    await this.step('Assert at least one popular tag is visible', async () => {
      await expect(first).toBeVisible();
    });
  }
}