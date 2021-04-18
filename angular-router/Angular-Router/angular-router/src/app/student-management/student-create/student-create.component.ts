import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Student} from '../student';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})

// Các bạn có thể tìm hiểu thêm  phần này tại blogs: https://levunguyen.com,
//   blogs chuyên về lập trình và các kỹ năng mềm trong nghề lập trình

export class StudentCreateComponent implements OnInit {

  studentForm: FormGroup;
  student: Student;

  constructor(private studentService: StudentService, private router: Router) {
  }

  ngOnInit(): void {

    this.studentForm = new FormGroup(
      {
        name: new FormControl(''),
        dateOfBirth: new FormControl('')
      }
    );
  }

  save(): void {
    this.student = Object.assign({}, this.studentForm.value);
    console.log(this.student);
    this.studentService.save(this.student).subscribe(
      next => {
        alert('demo');
        this.router.navigateByUrl('student-list');
        this.studentService.message = 'Register info successfully!';
      },
      error => {
        alert('failed');
        this.studentService.message = 'Register info failed!';
      }
    );
  }
}
