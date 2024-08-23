import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
import { IProduct } from 'src/Data/interfaces/IProduct';

export interface IProductState extends EntityState<IProduct> {
    SelectedCustomerId:number,
    loading:boolean,
    loaded:boolean,
    error:string,
    category:string,
    searchKey:string,
    total:number,
    limte:number,
    skip:number
    cartItems:number
}

export const defulteProductState : IProductState = {
    ids:[],
    entities:{},
    SelectedCustomerId:0,
    error:"",
    loading:false,
    loaded:false,
    category:"All Products",
    searchKey:"",
    total:0,
    limte:0,
    skip:0,
    cartItems:0
}  

export const ProductAdapter:EntityAdapter<IProduct> = createEntityAdapter<IProduct>();

export const IntialproductState = ProductAdapter.getInitialState(defulteProductState);