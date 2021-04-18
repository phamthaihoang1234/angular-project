import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatesongComponent } from './ShopCart/createshop/createsong.component';
import { DeletesongComponent } from './ShopCart/deleteshop/deletesong.component';
import { EditsongComponent } from './ShopCart/editshop/editsong.component';
import { ListsongComponent } from './ShopCart/listshopproduct/listsong.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreatesongComponent,
    DeletesongComponent,
    EditsongComponent,
    ListsongComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
