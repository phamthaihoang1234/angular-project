import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditsongComponent } from './song/editsong/editsong.component';
// import {PlaylistComponentComponent} from './component/playlist-component/playlist-component.component';

import {AdminComponent} from './component/admin/admin.component';
import {LoginHomeComponent} from './component/login-home/login-home.component';
import {RegisComponent} from "./component/regis/regis.component";
import {MusicPlayerComponent} from "./music-player/music-player.component";
import {HomepageComponent} from "./user/homepage/homepage.component";


const routes: Routes = [
  {
    path: '',
    component: MusicPlayerComponent
  },
  {
    path: 'regis',
    component: RegisComponent
  },
  {
    path: 'admin' ,
    component: AdminComponent
  },
  {
    path: 'loginHome',
    component: LoginHomeComponent
  },
  {
    path: 'playlists',
    component: EditsongComponent
  },{
  path:'homepage',
    component: HomepageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
