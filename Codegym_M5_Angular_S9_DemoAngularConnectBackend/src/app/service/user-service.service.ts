import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../iuser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  urlAPI = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {
  }

  getallUsers(): Observable<any>{
    return this.http.get(this.urlAPI + '/all');
  }

  getAllUser(page, size, search?: string): Observable<any> {
    return this.http.get(this.urlAPI + `?searchName=${search}&page=${page}&size=${size}`);
  }

  create(user: IUser): Observable<any> {
    return this.http.post<IUser>(this.urlAPI, user);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.urlAPI}/${id}`);
  }

  update(user: IUser): Observable<any> {
    return this.http.put<IUser>(`${this.urlAPI}/${user.id}`, user);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.urlAPI}/${id}`);
  }
}
