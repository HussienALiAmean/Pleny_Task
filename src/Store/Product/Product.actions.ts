import { IProduct } from "src/Data/interfaces/IProduct";
import { Action } from "@ngrx/store";





export enum ProductActions {

    lOAD_PRODUCTS = "LoadProducts",
    lOAD_PRODUCTS_SUCCESS = "LoadProductsSuccess",
    lOAD_PRODUCTS_Failed = "LoadProductsFailed",

    FILTER_PRODUCTS = "FilterProducts",
    FILTER_PRODUCTS_Failed = "FilterProductsFailed",

    SEARCH_PRODUCTS = "SearchProducts",
    SEARCH_PRODUCTS_Failed = "SearchProductsFailed",

    ADD_TO_CART = "AddToCart",
    ADD_TO_CART_SUCCESS = "AddToCartSuccess",
    ADD_TO_CART_Failed = "AddToCartFailed"
}

export class LoadProducts implements Action {
    readonly type = ProductActions.lOAD_PRODUCTS;
    constructor(public payload: number) { }
}
export class LoadProductsSuccess implements Action {
    readonly type = ProductActions.lOAD_PRODUCTS_SUCCESS;
    constructor(public payload: IProduct[], public total: number, public skip: number, public category:string="",public searchKey:string="") { }
}
export class LoadProductsFailed implements Action {
    readonly type = ProductActions.lOAD_PRODUCTS_Failed;
    constructor(public payload: string) { }
}
export class FilterProducts implements Action {
    readonly type = ProductActions.FILTER_PRODUCTS;
    constructor(public payload: string, public pageNumber: number) { }
}
export class FilterProductsFailed implements Action {
    readonly type = ProductActions.FILTER_PRODUCTS_Failed;
    constructor(public payload: string) { }
}
export class SearchProducts implements Action {
    readonly type = ProductActions.SEARCH_PRODUCTS;
    constructor(public payload: string, public pageNumber: number) { }
}
export class SearchProductsFailed implements Action {
    readonly type = ProductActions.SEARCH_PRODUCTS_Failed;
    constructor(public payload: string) { }
}
export class AddToCart implements Action {
    readonly type = ProductActions.ADD_TO_CART;
    constructor(public payload: string ,public productId:number,public  ProductQuantity:number) { }
}
export class AddToCartSuccess implements Action {
    readonly type = ProductActions.ADD_TO_CART_SUCCESS;
    constructor() { }
}
export class AddToCartFailed implements Action {
    readonly type = ProductActions.ADD_TO_CART_Failed;
    constructor(public payload: string) { }
}


export type ProductAction = LoadProducts
    | LoadProductsSuccess
    | LoadProductsFailed
    | FilterProducts
    | FilterProductsFailed
    | SearchProducts
    | SearchProductsFailed
    | AddToCart
    | AddToCartSuccess
    | AddToCartFailed;