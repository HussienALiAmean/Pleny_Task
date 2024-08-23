import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/stateless/home/home.component';
import { LoginComponent } from './components/stateful/login/login.component';
import { NotFoundComponent } from './components/stateless/not-found/not-found.component';
import { AuthGuard } from 'src/guards/auth/auth.guard';

const routes: Routes = [ 
  { path: '', redirectTo:'/Home', pathMatch:'full'},


  { path: 'Home', loadChildren: () => import('../module/product/product.module').then(m => m.ProductModule),canActivate: [AuthGuard]} ,

  { path: 'Login', component: LoginComponent },

  { path: '**', component:NotFoundComponent } ]
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
