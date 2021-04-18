import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  // editForm: FormGroup = new FormGroup({
  //   id: new FormControl(),
  //   name: new FormControl(),
  //   price: new FormControl(),
  //   image: new FormControl(),
  //   categoryId: new FormControl(),
  // });

  id: any;
  product: Product={};

  constructor(private fb: FormBuilder, private productService: ProductService, private router: ActivatedRoute, private router1: Router) {

  }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.productService.getOne(params.id).subscribe((res: any) => {
        this.editForm = this.fb.group({
          id: [res.data.id, [Validators.required]],
          name: [res.data.name, [Validators.required]],
          price: [res.data.price, [Validators.required]],
          image: [res.data.image, [Validators.required]],
          categoryId: [res.data.categoryId, [Validators.required]],
        });
      });
    });
  }

  editP(): void {
    this.productService.create(this.editForm.value).subscribe((res: any) => {
      this.router1.navigate(['products']);
    });
  }
}
