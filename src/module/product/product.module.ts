import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './components/stateful/products/products.component';
import { FilterationComponent } from './components/stateful/filteration/filteration.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Productreducer } from 'src/Store/Product/product.reducer';
import { ProductEffects } from 'src/Store/Product/product.effects';
import { RouterHeaderComponent } from './components/stateful/router-header/router-header.component';


@NgModule({
  declarations: [
    ProductsComponent,
    FilterationComponent,
    RouterHeaderComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature("Products",Productreducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule { }
