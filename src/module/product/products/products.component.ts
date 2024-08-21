import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }



  PAGESARRAY: number[] = Array.from({ length: 100 }, (_, i) => i + 1); // Example array [1, 2, 3, ..., 100]
  currentPage: number = 1;
  totalPages: number = this.PAGESARRAY.length;
  visiblePages: number[] = [];

  ngOnInit(): void {
    this.updateVisiblePages();
  }

  selectPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updateVisiblePages();


   ///write code to dispatch an action to can call all if Flage or all products not selected then you can make by search  


  }

  updateVisiblePages(): void {
    let startPage = Math.max(this.currentPage - 2, 2);
    let endPage = Math.min(this.currentPage + 2, this.totalPages - 1);

    // Ensure we always show up to 5 pages unless we're at the start or end
    if (endPage - startPage < 4) {
      if (startPage === 2) {
        endPage = Math.min(startPage + 4, this.totalPages - 1);
      } else if (endPage === this.totalPages - 1) {
        startPage = Math.max(endPage - 4, 2);
      }
    }

    this.visiblePages = this.PAGESARRAY.slice(startPage - 1, endPage);
  }

  shouldShowLeftEllipsis(): boolean {
    return this.currentPage > 3;
  }

  shouldShowRightEllipsis(): boolean {
    return this.currentPage < this.totalPages - 2;
  }
}