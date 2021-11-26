import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products');
  }

  find(id: string) {
    return this.http.get<Product>(`https://platzi-store.herokuapp.com/products/${id}`)
  }
}
