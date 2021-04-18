import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoginHomeComponent } from './component/login-home/login-home.component';
import { RegisComponent } from './component/regis/regis.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgxAudioPlayerModule } from 'ngx-audio-player';

import { EditsongComponent } from './song/editsong/editsong.component';
// import { CreatePlaylistComponent } from './playlist/create-playlist/create-playlist.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
// import { NavbarComponent } from "./shared/navbar/NavbarComponent";
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ListsongComponent } from './song/listsong/listsong.component';
// import { PlaylistComponentComponent } from './component/playlist-component/playlist-component.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { HomepageComponent } from './user/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    MusicPlayerComponent,
    AppComponent,
    AdminComponent,
    LoginHomeComponent,
    RegisComponent,


    EditsongComponent,
    // CreatePlaylistComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ListsongComponent,
    HomepageComponent,
    // PlaylistComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxAudioPlayerModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
