import { BasePage } from '../BasePage';
import { GlobalFeedTab } from '../../components/feed/GlobalFeedTab';
import { PopularTags } from '../../components/feed/PopularTags';
import { TagFeed } from '../../components/feed/TagFeed';

export class BaseHomePage extends BasePage {
  globalFeed;
  popularTags;
  tagFeed;

  constructor(page, userId = 0) {
    super(page, userId);
    this._url = '/';
    this.globalFeed = new GlobalFeedTab(this.page, userId);
    this.popularTags = new PopularTags(this.page, userId);
    this.tagFeed = new TagFeed(this.page, userId);
  }

  async open() {
    await this.step(`Open Home page`, async () => {
      await this.page.goto(this._url);
    });
  }

  async waitAndReload(assertFunction = undefined, retries = 3, delay = 5000) {
    for (let i = 0; i < retries; i++) {
      try {
        if (assertFunction) {
          await assertFunction();
          return; // Assertion passed, exit early
        }
        // If no assertFunction, do nothing and let the loop continue
      } catch (e) {
        if (i === retries - 1) throw e; // Last try, rethrow
      }
      await this.page.waitForTimeout(delay);
      await this.page.reload();
    }
  }
}
