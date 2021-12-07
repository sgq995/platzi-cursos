import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/core/serivces/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  total = 0;

  constructor(private cartService: CartService) {
    cartService.cart$.subscribe(products => {
      this.total = products.length
    })
  }

  ngOnInit(): void {}
}
