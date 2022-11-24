import { Component, OnInit } from '@angular/core';

import { map, Observable } from 'rxjs';

import { CartService } from 'src/app/core/serivces/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;

  constructor(private cartService: CartService) {
    this.total$ = cartService.cart$.pipe(map((products) => products.length));
  }

  ngOnInit(): void {}
}
