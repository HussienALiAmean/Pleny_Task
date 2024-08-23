import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {  getproductsCategory } from 'src/Store/Product/product.selectors';
import { IProductState } from 'src/Store/Product/product.state';

@Component({
  selector: 'app-router-header',
  templateUrl: './router-header.component.html',
  styleUrls: ['./router-header.component.css']
})
export class RouterHeaderComponent implements OnInit {

  constructor(private _Store:Store<IProductState>) { }
  category:string="All";
  ngOnInit(): void {
    this._Store.pipe(select(getproductsCategory)).subscribe(res=>this.category=res)
  }

}
