import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICart } from 'src/Data/interfaces/ICart';
import { ApiService } from '../API/api.service';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl:string = environment.apiUrl+"/carts";

  constructor(private _cartApi: ApiService<ICart> ,private _httpClient:HttpClient) {}

   // Add product to Cart  with pagination
   addToCart( productId:number,productQuantity:number): Observable<ICart>
   {
    // if (CartItem == 0)
    //  {
       return this._httpClient.post<ICart>(`${this.baseUrl}/add`, {products:[{id:productId,quantity:productQuantity}]  })
                              .pipe(
                                    catchError(error => {
                                      console.error('Error fetching all products:', error);
                                      return [];
                                    })
                                  );
    // }
    // return this._httpClient.put<ICart>(`${this.baseUrl}`, {products:[{id:productId,quantity:productQuantity}]  })
    // .pipe(
    //       catchError(error => {
    //         console.error('Error fetching all products:', error);
    //         return [];
    //       })
    //     );
    
    }





}

