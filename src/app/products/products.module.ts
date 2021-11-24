import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { ProductsRoutingModule } from './products-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductDetailComponent],
  imports: [CommonModule, CoreModule, ProductsRoutingModule],
})
export class ProductsModule {}
