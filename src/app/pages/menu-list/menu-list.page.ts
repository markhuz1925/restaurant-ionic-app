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
      this.menuItem.menus.forEach((item:any) => item.qty = 0);
    });
    this._userService.getOrders();
    this.cart = this._userService.getCartItems();
  }

  addCart(i, qty) {
    qty  = qty === 0? 1: qty;
    let item = this._userService.getCartItems().find(item => item.id == i.menuid);
    if (item === undefined) {
      this._userService.getCartItems().push({
        id: i.menuid,
        name: i.name,
        description: i.description,
        price: i.price,
        qty: qty
      })
    }
    else {
      item.qty = item.qty + qty;
    }
  }

  goToMyCart(): void {
    this.router.navigateByUrl('/cart');
  }

  IsItemOnCart(item): boolean {
    return this._userService.IsItemOnCart(item);
  }


  addMoreItemToCart(i): void {
    if(i.qty === undefined) {
      i.qty = 1;
    }
    else {
      i.qty++;
    }
  }

  removeMoreItemToCart(i): void {
    if(i.qty === undefined) {
      i.qty = 0;
    }
    else {
      if(i.qty <= 1) {
        i.qty = 0;
        return
      }
      else {
        i.qty--;
      }      
    }
  }

}
