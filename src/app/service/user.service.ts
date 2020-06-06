import { MenuService } from './menu.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  items = [];
  selectedItems = [];
  total = 0;

  private _user: { cart: Array<any>, orders: Array<any> } = { cart: [], orders: [] };

  constructor() { }

  getCartItems() {
    return this._user.cart;
  }

  addItemsCart(item: any): void {
    this._user.cart.push(item);
  }

  getOrders() {
    return this._user.orders;
  }

  getTotalAmount() {
    this.items = this._user.cart;
    let selected = {};
    for (let obj of this.items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 };
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key]);
    this.total = this.selectedItems.reduce((a, b) => a + (b.qty * b.price), 0);
  }

}
