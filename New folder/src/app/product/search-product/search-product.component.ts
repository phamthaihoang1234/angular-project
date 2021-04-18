import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  // @ts-ignore
  searchKey: string;
  products: any = [];
  searchProducts: any = [];

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe((res: any) => {
      this.products = res.data;
    });
  }

  search(key: string): any {
    key = this.searchKey;
    // for (const product of this.products) {
    //   if ((product.name).includes(key)) {
    //     this.searchProducts.push(product);
    //   }
    // }
    this.router.navigateByUrl('/products', {state: this.searchProducts});
    this.searchProducts = [];
  }

}
