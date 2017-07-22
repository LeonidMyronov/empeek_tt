import { Injectable } from '@angular/core';
import {Item} from "../items/item.model";

@Injectable()
export class UserSessionService {
  private _userStore = 'userStore';
  constructor() {
  }

  getItems(): any {
    try {
      const items:Item[] = JSON.parse(localStorage.getItem(this._userStore));
      return items;

    }
    catch(e) {
      console.log('Parsing data error. ', e.message);
      return [];
    }
  }

  storeItems(data: Item[]): void {
    localStorage.setItem(this._userStore, JSON.stringify(data));
  }

  flushStore(): void {
    localStorage.clear();
  }

  isEmpty(): Boolean {
    return localStorage.getItem(this._userStore) === null ? true : false;
  }

}
