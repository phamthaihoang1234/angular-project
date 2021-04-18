import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  message?: string;
  formLogin = this.fb.group({
    fullName: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    // @ts-ignore
    this.authService.login(this.formLogin.value).subscribe(res => {

      if (res.error === 'Unauthorized') {
        console.log('3232');
        this.message = 'Unauthorized';
      } else {
        localStorage.setItem('token', res.token);

        this.router.navigate(['admin']);
        this.authService.getUserAuthor(res.username).subscribe(val => {
          console.log(val);
        })
      }
    });
  }

  loginFacebook(){
    this.authService.loginGoogle().subscribe((result)=>{
      // alert("success");
      this.router.navigate(['admin']);
    })
  }

}
