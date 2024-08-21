import { Injectable } from '@angular/core';
import { ApiService } from '../API/api.service';
import { environment } from 'src/environments/environment';
import { catchError, Observable } from 'rxjs';
import { IProductPag } from 'src/Data/interfaces/IProductPag';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IProduct } from 'src/Data/interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
  export class ProductService {
    private baseUrl = environment.apiUrl+"/products";

    constructor(private productApi: ApiService<IProduct> ,private _httpClient:HttpClient) {
    }
  
    getProductById(id: number) {
      return  this.productApi.getById(this.baseUrl, id);
    }


    // Fetch all products with pagination
    getAllProducts(page: number, limit: number): Observable<IProductPag>
    {
      const params = new HttpParams()
        .set('limit', limit.toString())
        .set('skip', ((page - 1) * limit).toString());

      return this._httpClient.get<IProductPag>(`${this.baseUrl}`, { params }).pipe(
        catchError(error => {
          console.error('Error fetching all products:', error);
          return [];
        })
      );
    }

    // Search products with pagination
    searchProducts(query: string, page: number, limit: number): Observable<IProductPag>
    {
      const params = new HttpParams()
        .set('q', query)
        .set('limit', limit.toString())
        .set('skip', ((page - 1) * limit).toString());

      return this._httpClient.get<IProductPag>(`${this.baseUrl}/search`, { params }).pipe(
        catchError(error => {
          console.error('Error searching products:', error);
          return [];
        })
      );
    }

  // Filter products with pagination (example filter by category)
  filterProducts(category: string, page: number, limit: number): Observable<IProductPag> {
    const params = new HttpParams()
      .set('limit', limit.toString())
      .set('skip', ((page - 1) * limit).toString())

    return this._httpClient.get<IProductPag>(`${this.baseUrl}/category/${category}}`, { params }).pipe(
      catchError(error => {
        console.error('Error filtering products:', error);
        return [];
      })
    );
  }

  // get all product category name
  getAllCategory():Observable<string[]>
  { 
    return this._httpClient.get<string[]>(`${this.baseUrl}/category-list`).pipe(
      catchError(err=>{
        console.log(err);
        return [];
      })
    )
  }
}