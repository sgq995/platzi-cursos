import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from 'src/app/product.model';
import { CartService } from 'src/app/core/serivces/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private cartService: CartService) {
    this.products$ = cartService.cart$;
  }

  ngOnInit(): void {}
}
