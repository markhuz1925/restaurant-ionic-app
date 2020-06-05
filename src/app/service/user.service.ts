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

}
