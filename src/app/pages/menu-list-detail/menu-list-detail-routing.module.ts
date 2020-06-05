import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuListDetailPage } from './menu-list-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MenuListDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuListDetailPageRoutingModule {}
