import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from '../ibook';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  api = 'http://localhost:3000/books';

  // @ts-ignore
  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<any> {
    return this.http.get(this.api);
  }

  getBookById(id): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }

  create(book: IBook): Observable<any> {
    return this.http.post<IBook>(this.api, book);
  }

  update(book: IBook): Observable<any> {
    return this.http.put<IBook>(`${this.api}/${book.id}`, book);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
