import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from 'src/Data/interfaces/IProduct';
import { environment } from 'src/environments/environment';
import { UIService } from 'src/services/UI/ui.service';
import { AddToCart, FilterProducts, LoadProducts, SearchProducts } from 'src/Store/Product/Product.actions';
import { getproducts, getproductsCategory, getproductsError, getproductsSearchKey, getproductsTotaleItems } from 'src/Store/Product/product.selectors';
import { IProductState } from 'src/Store/Product/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  Products$!:Observable<IProduct[]>;
  PAGESARRAY: number[] = []; 
  currentPage: number = 1;
  totalPages!: number ;
  visiblePages: number[] = [];
  category!:string;
  searchkey!:string;

  constructor(private _Store:Store<IProductState>,private _UIService:UIService) { }

   


  ngOnInit(): void {
    this._UIService.changecart(true);
    this._Store.dispatch(new LoadProducts(this.currentPage));
    this.Products$ = this._Store.pipe(select(getproducts));
    this._Store.pipe(select(getproductsTotaleItems)).subscribe(res=>{this.PAGESARRAY = Array.from({ length: Math.ceil(res/environment.limiteOFItemPerPage) }, (_, i) => i + 1); 
                                                                     this.totalPages= this.PAGESARRAY.length;
                                                                     this.updateVisiblePages();});
    this._Store.pipe(select(getproductsCategory)).subscribe(res=>{this.category=res; this.currentPage=1; this.searchkey=""; });
    this._Store.pipe(select(getproductsSearchKey)).subscribe(res=>{this.searchkey=res; this.currentPage=1; this.category="All" });
  }

  selectPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    if (this.searchkey==""&&this.category=="All")
    {
        this._Store.dispatch(new LoadProducts(this.currentPage));
        console.log("normal",this.searchkey,this.category)
    }
    else if (this.searchkey=="" && this.category!="All")
    {
       this._Store.dispatch(new FilterProducts(this.category,this.currentPage));
       console.log("filter",this.searchkey,this.category);

    }
    else if (this.searchkey!="" && this.category=="All")
    {
      this._Store.dispatch(new SearchProducts(this.searchkey,this.currentPage));
      console.log("search",this.searchkey,this.category);

    }
      this.updateVisiblePages();
   ///write code to dispatch an action to can call all if Flage or all products not selected then you can make by search  

  }

  addToCart(productid: number) {
   this._Store.dispatch(new AddToCart("",productid,1));
  }

  updateVisiblePages(): void {
    let startPage = Math.max(this.currentPage - 1, 2); // Start 1 page before the current page, minimum is page 1
    let endPage = Math.min(this.currentPage + 1, this.totalPages-1); // End 1 page after the current page, maximum is the last page
  
    // Adjust start and end if there are fewer than 2 pages between them
    if (endPage - startPage < 1) {
      if (startPage === 1) {
        endPage = Math.min(startPage + 1, this.totalPages);
      } else if (endPage === this.totalPages) {
        startPage = Math.max(endPage - 1, 1);
      }
    }
  
    // Ensure startPage and endPage are within the valid range
    this.visiblePages = this.PAGESARRAY.slice(startPage - 1, endPage);
  }
  

  shouldShowLeftEllipsis(): boolean {
    return this.currentPage > 3;
  }

  shouldShowRightEllipsis(): boolean {
    return this.currentPage < this.totalPages - 2;
  }
}