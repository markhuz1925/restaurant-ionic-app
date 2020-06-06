import { MenuService } from './menu.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
    return this._user.cart.reduce((a, b) => a + (b.qty * b.price), 0);
  }

  IsItemOnCart(cartItem: any): boolean {
    return this._user.cart.filter(item => item.menuid === cartItem.menuid).length > -1;
  }

}
