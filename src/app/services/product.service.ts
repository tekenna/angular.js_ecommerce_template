import { Injectable } from '@angular/core';
import { Product } from '../models/product_model';
import { products } from 'src/constants/dummy';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getAll = (): Product[] => {
    return products;
  };
}
