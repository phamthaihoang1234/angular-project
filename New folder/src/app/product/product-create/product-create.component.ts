import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: any;
  createForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    categoriID: new FormControl('', Validators.required),
  });

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createNew() {
    console.log(this.createForm);
    this.productService.create(this.createForm.value).subscribe((res: any) => {
      console.log(this.createForm.value.categoriID);
      this.router.navigate(['products']);
    });
  }
}
