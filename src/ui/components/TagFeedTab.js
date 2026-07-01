
import{ BaseComponent } from "./BaseComponent.js";
import{ArticleFeedItem} from "./ArticleFeedItem.js";

export class TagFeedTab extends BaseComponent{
 constructor(page, userId = 0) {
    super(page, userId);
    this.articleFeedItem = new ArticleFeedItem(page, userId);


 }
}