import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";
import {User} from "../User";

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {

  createForm = this.fb.group({
    fullName: [''],
    password: [''],
    username: ['']
  });
  constructor(private fb: FormBuilder,
              private userService: UserServiceService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createUser() {
    const user: User = this.createForm.value;
    this.userService.create(user).subscribe(() => {
      alert('Create successfully!');
      this.router.navigate(['login']);
    });
  }





}
