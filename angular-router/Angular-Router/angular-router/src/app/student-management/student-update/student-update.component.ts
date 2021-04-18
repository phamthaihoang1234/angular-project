import {Component, OnInit} from '@angular/core';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  constructor(private studentService: StudentService, private router: Router) {
    console.log('list' + this.studentService.message);
  }

  ngOnInit(): void {
  }

  backToList(): void {
    // this.router.navigateByUrl('/');
    this.studentService.message =  null;
    this.router.navigate(['/']);
  }

}
