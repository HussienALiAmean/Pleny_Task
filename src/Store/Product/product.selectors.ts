import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProductState, ProductAdapter } from "./product.state";


const createProductFeatureSelector = createFeatureSelector<IProductState>("Products");

export const getproducts=createSelector(createProductFeatureSelector,ProductAdapter.getSelectors().selectAll);
export const getproductsLoading=createSelector(createProductFeatureSelector,(state:IProductState)=>state.loading);
export const getproductsLoaded=createSelector(createProductFeatureSelector,(state:IProductState)=>state.loaded);
export const getproductsError=createSelector(createProductFeatureSelector,(state:IProductState)=>state.error);
export const getproductsLimit=createSelector(createProductFeatureSelector,(state:IProductState)=>state.limte);
export const getproductsSkip=createSelector(createProductFeatureSelector,(state:IProductState)=>state.skip);
export const getproductsTotaleItems=createSelector(createProductFeatureSelector,(state:IProductState)=>state.total);
export const getproductsCategory=createSelector(createProductFeatureSelector,(state:IProductState)=>state.category);
export const getproductsSearchKey=createSelector(createProductFeatureSelector,(state:IProductState)=>state.searchKey);
export const getcartItems=createSelector(createProductFeatureSelector,(state:IProductState)=>state.cartItems);
export const getCurrentproductId=createSelector(createProductFeatureSelector,(state:IProductState)=>state.SelectedCustomerId);
export const getCurrentproduct=createSelector(createProductFeatureSelector,(state:IProductState)=>state.entities[state.SelectedCustomerId]);