import { Component, OnInit } from '@angular/core';
import {Product} from '../model/Product';
import {ProductService} from '../service/ProductService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  productService;


  constructor() {
    this.productService = new ProductService();
  }

  ngOnInit(): void {
  }

  getProducts(){
    this.products = this.productService.getProducts();
  }
}
