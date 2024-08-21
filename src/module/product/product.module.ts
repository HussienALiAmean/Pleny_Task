import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from '../product/products/products.component';
import { FilterationComponent } from './filteration/filteration.component';


@NgModule({
  declarations: [
    ProductsComponent,
    FilterationComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
