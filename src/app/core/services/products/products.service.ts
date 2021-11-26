import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../../product.model';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Product[]>(`${environment.platziStoreApi}/products`);
  }

  find(id: string) {
    return this.http.get<Product>(
      `${environment.platziStoreApi}/products/${id}`
    );
  }

  create(product: Product) {
    return this.http.post(`${environment.platziStoreApi}/products`, product);
  }
}
