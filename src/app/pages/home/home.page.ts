import { UserService } from './../../service/user.service';
import { Menu } from './../../model/menu.model';
import { MenuService } from './../../service/menu.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  menus: Menu[];
  cart = [];

  constructor(
    private _menuService: MenuService,
    private router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.menus = this._menuService.getMenuCategory();
    this.cart = this._userService.getCartItems()
  }

  goToMyCart() {
    this.router.navigateByUrl('/cart');
  }

}
