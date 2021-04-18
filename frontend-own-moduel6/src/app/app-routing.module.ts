import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListsongComponent} from './ShopCart/listshopproduct/listsong.component';
import {AuthGuard} from './helper/auth-guard';

const routes: Routes = [
  {
    path: 'listshopproduct/:username',
    component: ListsongComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
