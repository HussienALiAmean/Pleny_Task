import { ProductAction, ProductActions } from "./Product.actions";
import { IntialproductState, IProductState, ProductAdapter } from "./product.state";




export function  Productreducer(state:IProductState = IntialproductState,action:ProductAction):IProductState
{
    switch (action.type) {
        case ProductActions.lOAD_PRODUCTS_SUCCESS:
            return ProductAdapter.setAll(action.payload,{...state,loaded:true,loading:false,total:action.total,skip:action.skip,category:action.category,searchKey:action.searchKey})
    
        case ProductActions.lOAD_PRODUCTS_Failed:
            return {...state,loaded:false,loading:false,error:action.payload};
    
        case ProductActions.FILTER_PRODUCTS_Failed:
            return {...state,loaded:false,loading:false,error:action.payload}

        case ProductActions.SEARCH_PRODUCTS_Failed:
            return {...state,loaded:false,loading:false,error:action.payload}
        
        case ProductActions.ADD_TO_CART_SUCCESS:
            return {...state,loaded:false,loading:false,cartItems:state.cartItems+1}

        case ProductActions.ADD_TO_CART_Failed:
            return {...state,loaded:false,loading:false,error:action.payload}
    
        default:
            return {...state,loaded:false,loading:false}
    }
}