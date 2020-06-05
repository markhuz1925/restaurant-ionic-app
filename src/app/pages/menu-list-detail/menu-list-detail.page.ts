import { Menu } from './../../model/menu.model';
import { MenuService } from './../../service/menu.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list-detail',
  templateUrl: './menu-list-detail.page.html',
  styleUrls: ['./menu-list-detail.page.scss'],
})
export class MenuListDetailPage implements OnInit {

  menuListItem: Menu;

  constructor(private activatedRoute: ActivatedRoute, private _menuService: MenuService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('menuListId')) {
        return;
      }
      const menuListId = paramMap.get('menuListId');
      this.menuListItem = this._menuService.getMenuList(menuListId);
    });
  }

}
