import { Component } from '@angular/core';
import { Product } from 'src/app/models/product_model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private productService: ProductService) {
    this.products = productService.getAll();
  }
  products: Product[] = [];
  ngOnInit(): void {}
}
