import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ResgisterComponent } from './component/resgister/resgister.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoginHomeComponent } from './component/login-home/login-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ResgisterComponent,
    AdminComponent,
    LoginHomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
