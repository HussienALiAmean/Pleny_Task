import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/Product/product.service';

@Component({
  selector: 'app-filteration',
  templateUrl: './filteration.component.html',
  styleUrls: ['./filteration.component.css']
})
export class FilterationComponent implements OnInit {
 
  Categoris!:string[] ;
  selectedCategory: string = "All Categories";


  constructor(private _ProductService:ProductService) { }
  
  ngOnInit(): void {
  
    this._ProductService.getAllCategory().subscribe({
      next:(res)=>{
        this.Categoris=res
        console.log(res);
      },
      error:(err)=>console.log(err)
    });
  
  }
  changeProductList(event: any): void {
    this.selectedCategory = event.target.value;
    console.log('Selected Category:', this.selectedCategory);
  }



}
