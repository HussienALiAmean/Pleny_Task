import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/Auth/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IProductState } from 'src/Store/Product/product.state';
import { SearchProducts } from 'src/Store/Product/Product.actions';
import { getcartItems, getproductsSearchKey} from 'src/Store/Product/product.selectors';
import { UIService } from '../../../../services/UI/ui.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchKey!:string;
  isAuthenticated: boolean = false;
  subscriptionAuthentication !:Subscription;
  cartItems!:number;

  constructor(private authService:AuthService,private router:Router,private _store:Store<IProductState>,private _UIService:UIService) { }

  ngOnInit(): void 
  {
    this.updateAuthStatus();
  
    this.subscriptionAuthentication = this.authService.getAuthStatus().subscribe(status => {
      this.updateAuthStatus();
    });
  
    this._UIService.state$.subscribe({next: res=>{ if(res==true)
                                              this._store.pipe(select(getcartItems)).subscribe(res => {
                                               this.cartItems = res;})
                                           }
                                    });
      
    
  }



  private updateAuthStatus() 
  {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  LogOut() {
    this.authService.logout();
    this.router.navigate(['/Login']);
  }

  ngOnDestroy(): void {
    if (this.subscriptionAuthentication) {
      this.subscriptionAuthentication.unsubscribe();
    }
  }

  Search(){
    
    this._store.dispatch(new SearchProducts(this.searchKey,1));
    this._store.pipe(select(getproductsSearchKey)).subscribe(res=>{this.searchKey=res;});

  }
}
