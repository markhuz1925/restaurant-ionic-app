import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  items = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.items = this._userService.getCartItems();
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  getTotalAmountInCart() {
    return this._userService.getTotalAmount();
  }

  increaseQty(i): void {
    if(i.qty === undefined) {
      i.qty = 1;
    }
    else {
      i.qty++;
    }
  }

  decreaseQty(i): void {
    if(i.qty === undefined) {
      i.qty = 0;
    }
    else {
      if(i.qty <= 1) {
        return
      }
      else {
        i.qty--;
      }      
    }
  }

}
