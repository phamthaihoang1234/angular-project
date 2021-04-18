import {Component, OnInit} from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

// Các bạn có thể tìm hiểu thêm  phần này tại blogs: https://levunguyen.com,
//   blogs chuyên về lập trình và các kỹ năng mềm trong nghề lập trình

export class StudentListComponent implements OnInit {

  studentList: Student[];
  message: string;

  constructor(private studentService: StudentService) {

    studentService.findAll().subscribe(
      next => this.studentList = next,
      error => this.studentList = []
    );

  }

  ngOnInit(): void {
    this.message = this.studentService.message;
  }

}
