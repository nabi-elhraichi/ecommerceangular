import { Injectable } from '@angular/core';
import { PRODUCTS } from '../shared/products';
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  getProducts(): Product[] {
    return PRODUCTS;
  }
}
