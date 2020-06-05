import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuListDetailPageRoutingModule } from './menu-list-detail-routing.module';

import { MenuListDetailPage } from './menu-list-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuListDetailPageRoutingModule
  ],
  declarations: [MenuListDetailPage]
})
export class MenuListDetailPageModule {}
