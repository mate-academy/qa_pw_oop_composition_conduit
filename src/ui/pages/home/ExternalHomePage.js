import { BaseHomePage } from './BaseHomePage';
import { ExternalHeader } from '../../components/header/ExternalHeader';
import { TagFeedTab } from "../../components/TagFeedTab";

export class ExternalHomePage extends BaseHomePage {
  constructor(page, userId = 0) {
    super(page, userId);
    
    this.header = new ExternalHeader(page, userId);
    this.tagFeedTab = new TagFeedTab(page, userId);
  }
}
