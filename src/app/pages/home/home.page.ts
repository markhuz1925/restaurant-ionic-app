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

  constructor(private _menuService: MenuService, private _router: Router) { }

  ngOnInit() {
    this.menus = this._menuService.getMenuCategory();
  }

}
