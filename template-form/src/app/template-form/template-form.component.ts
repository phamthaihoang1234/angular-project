import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  student = {
    studentName: 'HOANG1234',
    studentCode: 'HE1213',
    studentAddress: 'HANOI'
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(createStudent: NgForm) {
    console.log(createStudent.value);


  }
}
