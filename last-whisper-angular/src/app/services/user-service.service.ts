import { Injectable } from '@angular/core';
import {User} from '../component/User';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url = 'http://localhost:8080/register';


  constructor(private http: HttpClient) {
  }

  create(user: User): Observable<any> {
    return this.http.post<User>(this.url, user);
  }



}
