import { BasePage } from '../BasePage';
import { expect } from '../../../common/helpers/pw';
import { GlobalFeedTab } from '../../components/feed/GlobalFeedTab';
import { PopularTags } from '../../components/PopularTags';

export class BaseHomePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this._url = '/';
    this.globalFeed = new GlobalFeedTab(this.page, userId);
    this.popularTags = new PopularTags(this.page, userId);
  }

  async openUntilArticleIsInGlobalFeed(title, timeout = 30000) {
    await this.step(
      `Open ${this._pageName()} page with the '${title}' article in the feed`,
      async () => {
        // The logged-out Home page is server rendered and cached: the first
        // request after an article is published still serves the previous
        // render and only then revalidates. Reopen until the feed catches up.
        await expect
          .poll(
            async () => {
              await this.page.goto(this.url());

              return await this.globalFeed.articleFeedItem.isArticleVisible(
                title,
              );
            },
            { timeout, intervals: [2000] },
          )
          .toBe(true);
      },
    );
  }
}
