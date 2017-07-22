import {Component, OnInit, OnDestroy} from '@angular/core';
import {ItemServiceService} from "../../core/item-service.service";
import {Item} from "../item.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit, OnDestroy {
  private items: Item[];
  private index: number;
  private itemsSubscription: Subscription;
  constructor(private itemService: ItemServiceService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
    this.itemsSubscription = this.itemService.updateItemsList.subscribe(
        (items: Item[]) => {
          this.items = items;
        }
    );
  }

  onSelectItem(index: number) {
    this.index = index;
    this.itemService.selectedIndex.next(index);
  }

  onDeleteItem(index: number) {
    if(index < this.index) {
      this.index--;
    }
    else if(index == this.index) {
      this.itemService.deletedIndex.next(index);
      this.index = null;
      console.log(index, this.items);

    }
    this.itemService.deleteItem(index);
  }


  ngOnDestroy() {
    if(this.itemsSubscription) {
      this.itemsSubscription.unsubscribe();
    }
  }
}
