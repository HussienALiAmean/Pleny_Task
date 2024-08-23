import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../../services/Product/product.service';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { AddToCart, AddToCartSuccess, FilterProducts, FilterProductsFailed, LoadProducts, LoadProductsFailed, LoadProductsSuccess, ProductAction, ProductActions, SearchProducts, SearchProductsFailed } from './Product.actions';
import { IProductPag } from '../../Data/interfaces/IProductPag';
import { CartService } from 'src/services/Cart/cart.service';

@Injectable({
    providedIn: 'root'
})
export class ProductEffects {

constructor(private _actions:Actions,private _ProductService:ProductService,private _CartService:CartService) {
    
}

@Effect()
LoadProductes$:Observable<Action> = this._actions.pipe(ofType<LoadProducts>(ProductActions.lOAD_PRODUCTS)
                                                       ,mergeMap((action: LoadProducts)=>
                                                                         this._ProductService.getAllProducts(action.payload)
                                                                                             .pipe(map((res:IProductPag)=>new LoadProductsSuccess(res.products,res.total,res.skip,"All"))
                                                                                             ,catchError(err => of(new LoadProductsFailed(err) )) )));

@Effect()
FilterProductes$:Observable<Action> = this._actions.pipe(ofType<FilterProducts>(ProductActions.FILTER_PRODUCTS)
                                                       ,mergeMap((action: FilterProducts)=>
                                                                         this._ProductService.filterProducts(action.payload,action.pageNumber)
                                                                                             .pipe(map((res:IProductPag)=> new LoadProductsSuccess(res.products,res.total,res.skip,action.payload) )
                                                                                             ,catchError(err => of(new FilterProductsFailed(err) )) )));

@Effect()
SearchProductes$:Observable<Action> = this._actions.pipe(ofType<SearchProducts>(ProductActions.SEARCH_PRODUCTS)
                                                       ,mergeMap((action: SearchProducts)=>
                                                                         this._ProductService.searchProducts(action.payload,action.pageNumber)
                                                                                             .pipe(map((res:IProductPag)=>new LoadProductsSuccess(res.products,res.total,res.skip,"All",action.payload))
                                                                                             ,catchError(err => of(new SearchProductsFailed(err) )) )));



@Effect()
AddToCart$:Observable<Action> = this._actions.pipe(ofType<AddToCart>(ProductActions.ADD_TO_CART)
                                                       ,mergeMap((action: AddToCart)=>
                                                                         this._CartService.addToCart(action.productId,action.ProductQuantity)
                                                                                             .pipe(map(()=>new AddToCartSuccess())
                                                                                             ,catchError(err => of(new SearchProductsFailed(err) )) )));


}