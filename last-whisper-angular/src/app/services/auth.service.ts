import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8080/login';
  erl = 'http://localhost:8080/user';
  uri = 'http://localhost:8080/login-google';

  constructor(private router: Router,
              private http: HttpClient) { }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }



  login(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  getUserAuthor(data: any): Observable<any> {
    return this.http.get(this.erl+'/'+data );
  }

  loginGoogle(): Observable<any>{
    return this.http.get(this.uri);
  }
}
