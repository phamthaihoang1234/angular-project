import {Injectable} from '@angular/core';
import {Student} from './student';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// Các bạn có thể tìm hiểu thêm  phần này tại blogs: https://levunguyen.com,
//   blogs chuyên về lập trình và các kỹ năng mềm trong nghề lập trình

export class StudentService {
  private API_URL = 'http://localhost:3000/studentList';
  message: string;

  constructor(private httpClient: HttpClient) {
    console.log('service constructor');
  }

  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API_URL);
  }

  save(student: Student): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, student);
  }
}
