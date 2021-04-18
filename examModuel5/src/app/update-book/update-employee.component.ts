import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { EmployeeService } from '../employee.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
  employeeForm: FormGroup;

  constructor(private activate: ActivatedRoute, private router: Router , private employeeService: EmployeeService, private  fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({

      firstName: [''],
      lastName: [''],
      emailId: ['']
    });

    this.activate.params.subscribe((params: Params) => {
      this.id = params.id;

      this.employeeService.getEmployee(this.id).subscribe(result =>
      {
        this.employee = result;
        this.employeeForm.patchValue({
          firstName: this.employee.firstName,
          lastName: this.employee.lastName,
          emailId: this.employee.emailId
        });
      });
    });
  }

  onSubmit() {
    if (!this.employeeForm.invalid) {
      this.employee.firstName = this.employeeForm.value.firstName;
      this.employee.lastName = this.employeeForm.value.lastName;
      this.employee.emailId = this.employeeForm.value.emailId;
    }

    console.log(this.employee.firstName);
    console.log(this.employee.lastName);
    console.log(this.employee.emailId);

    this.employeeService.updateEmployee(this.employee).subscribe(result => {

      alert('successfully!');
      this.router.navigate(['employees']);
    }, error => {
      console.log(error);
    });
  }


}
