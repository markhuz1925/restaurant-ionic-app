import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
      },
      {
        path: ':menuId',
        loadChildren: () => import('./pages/menu-list/menu-list.module').then(m => m.MenuListPageModule),
      },
      {
        path: ':menuId/:menuListId',
        loadChildren: () => import('./pages/menu-list-detail/menu-list-detail.module').then(m => m.MenuListDetailPageModule)
      }
    ],
  },
  {
    path: 'cart',
    // component: CartPage
    loadChildren: () => import('./pages/cart/cart.module').then(c => c.CartPageModule)
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
