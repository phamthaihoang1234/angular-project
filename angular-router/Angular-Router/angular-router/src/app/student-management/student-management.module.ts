import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import {StudentRoutingModule} from './student-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailComponent,
    StudentCreateComponent,
    StudentUpdateComponent,
    StudentDeleteComponent
  ],
  exports: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class StudentManagementModule { }
