import {Product} from '../model/Product';

export class ProductService{
  public getProducts(){
    let products: Product[];
    products = [
      new Product(1,'Computer',123),
      new Product(2,'telephone',235),
      new Product(3,'Iphone12',349)
    ];



    return products;
  }
}


