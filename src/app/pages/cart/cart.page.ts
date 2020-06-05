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

}
