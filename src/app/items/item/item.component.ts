import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ItemServiceService} from "../../core/item-service.service";
import {Subscription} from "rxjs";
import {Item} from "../item.model";
import {Comment} from "../comment.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {
  private selectedIndexSubscription: Subscription;
  private deletedIndexSubscription: Subscription;
  private updatingItemSubscription: Subscription;
  private item: Item;
  public isItemSelected: Boolean = false;
  private itemIndex: number;
  constructor(private itemService: ItemServiceService) { }

  ngOnInit() {
    this.selectedIndexSubscription = this.itemService.selectedIndex.subscribe(
        (index: number) => {
          this.isItemSelected = true;
          this.itemIndex = index;
          this.item = this.itemService.getItemByIndex(this.itemIndex);
        }
    );

    this.deletedIndexSubscription = this.itemService.deletedIndex.subscribe(
        (index: number) => {
            this.isItemSelected = false;
        }
    );

  }

  onSubmit(form: NgForm) {
    if(!form.valid) return;
    this.itemService.addCommentToItem(this.itemIndex, new Comment(form.controls.comment.value));
    form.reset();
  }

  ngOnDestroy() {
    if(this.selectedIndexSubscription) {
      this.selectedIndexSubscription.unsubscribe();
    }
    if(this.deletedIndexSubscription) {
      this.deletedIndexSubscription.unsubscribe();
    }
    if(this.updatingItemSubscription) {
      this.updatingItemSubscription.unsubscribe();
    }
  }

}

