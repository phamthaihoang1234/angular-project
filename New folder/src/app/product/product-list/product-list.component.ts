import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any = [];
  products2: any = [];
  products3: any = [];
  searchProducts: any = [];
  searchKey = '';
  sortStatus = true;
  pageSize = 3;
  pageTotal = [];
  pageTotal1 = [];

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe((res: any) => {
        this.products = res;

        this.products2 = res;
        this.products3 = res.data;
        if (this.pageTotal.length === 0) {
          for (let i = 1; i <= Math.ceil(this.products2.length / 3); i++) {
            // @ts-ignore
            this.pageTotal.push(i);
            // @ts-ignore
            this.pageTotal1.push([]);
          }
        }
        },
    );
  }

  detail(id: number): any {
    // @ts-ignore
    this.router.navigate(['/product-detail'], {queryParams: {id}});
  }

  deleteP(id: number): any {
    this.productService.delete(id).subscribe((res: any) => {
      this.ngOnInit();
    });
  }

  editP(id: number): any {
    this.router.navigate(['/product-edit'], {queryParams: {id}});
  }

  search(): void {
    console.log(this.searchKey);
    console.log(this.products);
    if (this.searchKey !== '') {
      for (const product of this.products) {
        if ((product.name).includes(this.searchKey)) {
          this.searchProducts.push(product);
        }
      }
      this.products = this.searchProducts;
      this.searchProducts = [];
    } else {
      this.products = this.products2;
    }
  }

  sort(key: any): any {
    if (this.sortStatus) {
      // @ts-ignore res["data"] res.data
      this.products.sort((a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0));
    } else {
      this.products.reverse();
    }
    this.sortStatus = !this.sortStatus;
  }

  paging(page: number): any {
    this.router.navigate(['/products'], {queryParams: {page}});

    this.activatedRoute.queryParams.subscribe(params => {
      for (let i = 0; i <= this.pageTotal1.length; i++) {
        for (const product of this.products3) {
          // console.log(product);
          // @ts-ignore
          if (this.pageTotal1[i].length < this.pageSize) {
            // @ts-ignore
            this.pageTotal1[i].push(product);
            this.products3.splice(this.products3.indexOf(product), 1);
          }
        }
      }
      this.products = this.pageTotal1[params.page - 1];
    });
  }
}
