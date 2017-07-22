import { Injectable } from '@angular/core';
import {UserSessionService} from "./user-session.service";
import {Item} from "../items/item.model";
import {Comment} from "../items/comment.model";
import {Subject} from "rxjs";

@Injectable()
export class ItemServiceService {
  private items: Item[];
  selectedIndex = new Subject<number>();
  deletedIndex = new Subject<number>();
  updateItemsList = new Subject<Item[]>();

  constructor(private userSessionService: UserSessionService) {
    this.checkRemoteStorage();
  }

  getItems() {
    return this.items.slice();
  }

  getItemByIndex(index: number) {
    return Object.assign({}, this.items[index]);
  }

  addCommentToItem(index: number, comment: Comment) {
    this.items[index].comments.push(comment);
    this.storeData();
  }

  addItem(item: Item) {
    this.items.push(item);
    this.updateItemsList.next(this.getItems());
    this.storeData();

  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.updateItemsList.next(this.getItems());
    this.storeData();
  }

  storeData() {
    this.userSessionService.storeItems(this.getItems());
  }

  checkRemoteStorage() {
    if(!this.userSessionService.isEmpty()) {
      this.items = this.userSessionService.getItems();
    }
    else {
      this.setTestData();
    }
  }

  setTestData() {
    this.items = [
      new Item('What is Lorem Ipsum?', [new Comment('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'), new Comment('It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')]),
      new Item('Section 1.10.32', [new Comment('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'), new Comment('Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'), new Comment('Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'), new Comment('Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?')]),
      new Item('1914 translation by H. Rackham'),
      new Item('Section 1.10.33'),
      new Item('4 translation by H. Rackham'),
    ];
  }

}

