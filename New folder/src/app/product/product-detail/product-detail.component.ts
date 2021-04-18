import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any = {
    id: 0,
    name: '',
    price: 0
  };

  constructor(private router: ActivatedRoute,
              private router1: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.productService.getOne(params.id).subscribe(
        (res: any) => {
          this.product = res.data;
          if (this.product == null) {
            this.router1.navigate(['products']);
          }
        }
      );
    });
  }
}
