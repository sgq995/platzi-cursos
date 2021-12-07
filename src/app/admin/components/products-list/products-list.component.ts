import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    // const index = this.products.findIndex((product) => product.id === id);
    // this.products.splice(index, 1);
    this.products = this.products.filter((product) => product.id !== id);

    this.productsService.deleteProduct(id).subscribe((response) => {
      console.log(response);
    });
  }
}
