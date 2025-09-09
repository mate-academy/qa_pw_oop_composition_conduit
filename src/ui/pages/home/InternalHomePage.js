import { BaseHomePage } from './BaseHomePage';
import { InternalHeader } from '../../components/header/InternalHeader';
import { YourFeedTab } from '../../components/feeds/YourFeedTab';
import { TagFeed } from '../../components/TagFeed';

export class InternalHomePage extends BaseHomePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this.header = new InternalHeader(this.page, userId);
    this.yourFeed = new YourFeedTab(this.page, userId);
    this.tagFeed = new TagFeed(this.page, userId);
    this.logOutButton = this.page.getByRole('button', {name: 'Or click here to logout.'});
  }

  async clickLogOutLink() {
    await this.step(`Click 'logout' button in the page header`, async () => {
      await this.logOutButton.click();
    });
  }
}
