import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../model/user';
import {UserToken} from '../model/user-token';
import {AuthService} from '../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser: UserToken | undefined;
  user: User = {
    username: '',
    password: ''
  };
  returnUrl = '';

  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private authService: AuthService,
               ) {
    this.authService.currentUser.subscribe(value => this.currentUser = value);

  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
  }

  // tslint:disable-next-line:typedef
  login(){
    // this.authService.login( this.user.username, this.user.password)
    //   .pipe(first())
    //   .subscribe(data => {
    //     this.router.navigate([this.returnUrl]);
    //   });
  }

}
