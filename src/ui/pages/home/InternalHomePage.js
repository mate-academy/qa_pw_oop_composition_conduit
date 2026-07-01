import { BaseHomePage } from './BaseHomePage';
import { InternalHeader } from '../../components/header/InternalHeader';
import { YourFeedTab } from '../../components/YourFeedTab';
import {TagFeedTab} from '../../components/TagFeedTab';

export class InternalHomePage extends BaseHomePage {
  constructor(page, userId = 0) {
    super(page, userId);

    this.header = new InternalHeader(this.page, userId);
    this.yourFeed = new YourFeedTab(this.page, userId);
    this.tagFeedTab = new TagFeedTab(this.page, userId);

  }

  async clickOnTagLink(tag) {
    await this.step(`Click on tag link '${tag}'`, async () => {
      await this.popularTags.clickOnTagLink(tag);
    });
  }

}


