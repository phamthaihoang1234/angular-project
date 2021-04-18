import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDeleteComponent } from './books/book-delete/book-delete.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookNewComponent } from './books/book-new/book-new.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full'},
  { path: 'books', component: BooksComponent },
  { path: 'book-new', component: BookNewComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: 'book-edit/:id', component: BookEditComponent },
  { path: 'book-delete/:id', component: BookDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
