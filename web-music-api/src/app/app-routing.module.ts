import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminComponent} from './component/admin/admin.component';
import {ResgisterComponent} from './component/resgister/resgister.component';
import {LoginHomeComponent} from './component/login-home/login-home.component';


const routes: Routes = [
  {
    path: 'admin' ,
    component: AdminComponent
  },
  {
    path: 'register',
    component: ResgisterComponent
  },
  {
    path: 'loginHome',
    component: LoginHomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
