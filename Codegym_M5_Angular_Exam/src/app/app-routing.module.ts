import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './books/list/list.component';
import {CreateComponent} from './books/create/create.component';
import {DetailComponent} from './books/detail/detail.component';
import {UpdateComponent} from './books/update/update.component';
import {DeleteComponent} from './books/delete/delete.component';

const routes: Routes = [
  {
    path: 'listBook',
    component: ListComponent
  },
  {
    path: 'createBook',
    component: CreateComponent
  },
  {
    path: 'updateBook/:id',
    component: UpdateComponent
  },
  {
    path: 'detailBook/:id',
    component: DetailComponent
  },
  {
    path: 'deleteBook/:id',
    component: DeleteComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
