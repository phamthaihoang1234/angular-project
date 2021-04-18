import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {
  }

  getAll(): any {
    return this.http.get(this.URL);
  }

  getOne(id: number): any {
    return this.http.get(this.URL + '/' + id);
  }

  create(product: any): any {
    return this.http.post(this.URL, product);
  }

  delete(id: number): any {
    return this.http.delete(this.URL + '/' + id);
  }


}
