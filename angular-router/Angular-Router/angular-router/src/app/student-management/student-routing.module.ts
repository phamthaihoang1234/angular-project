import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentCreateComponent} from './student-create/student-create.component';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentUpdateComponent} from './student-update/student-update.component';
import {StudentDeleteComponent} from './student-delete/student-delete.component';

// Các bạn có thể tìm hiểu thêm  phần này tại blogs: https://levunguyen.com,
//   blogs chuyên về lập trình và các kỹ năng mềm trong nghề lập trình

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'student-list'},
  {path: 'student-list', component: StudentListComponent},
  {path: 'student-create', component: StudentCreateComponent},
  {path: 'student-detail/:id', component: StudentDetailComponent},
  {path: 'student-update/:id', component: StudentUpdateComponent},
  {path: 'student-delete/:id', component: StudentDeleteComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class StudentRoutingModule { }
