import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      // this.product = this.productsService.find(id);
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.find(id).subscribe((product) => {
      console.log({ product });
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '1212',
      title: 'Creado',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'Nuevo producto',
    };
    this.productsService.create(newProduct).subscribe((product) => {
      console.log({ product });
    });
  }

  updateProduct() {
    const updatedProduct: Partial<Product> = {
      price: 555555,
      description: 'Edicion titulo',
    };
    this.productsService.update('2', updatedProduct).subscribe((product) => {
      console.log({ product });
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('2').subscribe((response) => {
      console.log({ response });
    });
  }
}
