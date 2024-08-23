import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../../services/Product/product.service';
import { select, Store } from '@ngrx/store';
import { IProductState } from 'src/Store/Product/product.state';
import { FilterProducts } from 'src/Store/Product/Product.actions';
import { getproducts, getproductsCategory } from 'src/Store/Product/product.selectors';

@Component({
  selector: 'app-filteration',
  templateUrl: './filteration.component.html',
  styleUrls: ['./filteration.component.css']
})
export class FilterationComponent implements OnInit {
 
  Categoris!:string[] ;
  selectedCategory!: string;


  constructor(private _ProductService:ProductService, private _store:Store<IProductState>) { }
  
  ngOnInit(): void {
    this._store.pipe(select(getproductsCategory)).subscribe(res=>this.selectedCategory=res);
    this._ProductService.getAllCategory().subscribe({
      next:(res)=>{
        this.Categoris=res
        console.log(res);
      },
      error:(err)=>console.log(err)
    });
  
  }
  changeProductList(event: any): void {
    this._store.dispatch(new FilterProducts(event.target.value,1));
    
  }



}
