import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ItemServiceService} from "../core/item-service.service";
import {Item} from "../items/item.model";

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  constructor(private itemService: ItemServiceService) { }

  ngOnInit() {
  }

  onSubmit(searchForm: NgForm) {
    this.itemService.addItem(new Item(searchForm.controls.itemName.value))
  }
}
