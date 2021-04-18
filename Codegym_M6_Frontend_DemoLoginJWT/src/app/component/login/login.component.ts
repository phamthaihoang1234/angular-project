import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: number;
  message: string;
  formLogin: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  login() {
    this.authService.login(this.formLogin.value).subscribe(res => {
      if (res.error === 'Unauthorized') {
        console.log('3232');
        this.message = 'Unauthorized';
      } else {
        localStorage.setItem('token', res.token);
        this.router.navigate(['admin']);
      }
    });
  }

}
