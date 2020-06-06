import { UserService } from './../../service/user.service';
import { Menu } from './../../model/menu.model';
import { MenuService } from './../../service/menu.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.page.html',
  styleUrls: ['./menu-list.page.scss'],
})
export class MenuListPage implements OnInit {

  menuItem: Menu;
  cart = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _menuService: MenuService,
    private _userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('menuId')) {
        return;
      }
      const menuId = paramMap.get('menuId');
      this.menuItem = this._menuService.getMenu(menuId);
    });
    this._userService.getOrders();
    this.cart = this._userService.getCartItems();
  }

  addCart(i) {
    // this._userService.addItemsCart(i);
    let item = this._userService.getCartItems().find(item => item.id == i.menuid);
    if (item === undefined) {
      this._userService.getCartItems().push({
        id: i.menuid,
        name: i.name,
        description: i.description,
        price: i.price,
        qty: 1
      })
    }
    else {
      item.qty++;
    }
    // this.router.navigateByUrl('/cart');
  }

  goToMyCart() {
    this.router.navigateByUrl('/cart');
  }

  IsItemOnCart(item) {
    this._userService.IsItemOnCart(item);
  }


  addMoreItemToCart(i) {
    let item = this._userService.getCartItems().find(item => item.id == i.menuid);
    if (item === undefined) {
      this._userService.getCartItems().push({
        id: i.menuid,
        name: i.name,
        description: i.description,
        price: i.price,
        qty: 1
      })
    }
    else {
      item.qty++;
    }
  }

  removeMoreItemToCart(i) {
    let item = this._userService.getCartItems().find(item => item.id == i.menuid);
    if (item === undefined) {
      this._userService.getCartItems().push({
        id: i.menuid,
        name: i.name,
        description: i.description,
        price: i.price,
        qty: 1
      })
    }
    else {
      item.qty--;
    }
  }

}
