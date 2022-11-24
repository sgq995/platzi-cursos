import { Component, OnInit } from '@angular/core';

import { Product } from '../../../product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log('product', id);
  }

  fetchProducts() {
    this.productsService.getAll().subscribe((products) => {
      console.log({ products });
      this.products = products;
    });
  }
}
