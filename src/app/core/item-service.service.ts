import { Injectable } from '@angular/core';
import {Item} from "../items/item.model";
import {Comment} from "../items/comment.model";
import {Subject} from "rxjs";

@Injectable()
export class ItemServiceService {
  private items: Item[];
  selectedIndex = new Subject<number>();
  deletedIndex = new Subject<number>();
  updateItemsList = new Subject<Item[]>();
  updateItem = new Subject<Item>();

  constructor() {
    this.items = [
        new Item('1 item', [new Comment('comment one'), new Comment('comment two')]),
        new Item('2 item', [new Comment('comment one'), new Comment('comment two'), new Comment('comment three'), new Comment('comment four')]),
        new Item('3 item'),
        new Item('4 item'),
        new Item('5 item'),
    ];
  }

  getItems() {
    return this.items.slice();
  }

  getItemByIndex(index: number) {
    return Object.assign({}, this.items[index]);
  }

  addCommentToItem(index: number, comment: Comment) {
    this.items[index].comments.push(comment);
    // this.updateItem.next(this.getItemByIndex(index));
  }

  addItem(item: Item) {
    this.items.push(item);
    this.updateItemsList.next(this.getItems());
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.updateItemsList.next(this.getItems());
  }

}

