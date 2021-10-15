import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import {CartComponent} from './cart/cart.component'
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardGuard } from './shared/guard/auth-guard.guard';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"cart",component:CartComponent,canActivate:[AuthGuardGuard]},
  {path:"products",component:ProductsComponent,canActivate:[AuthGuardGuard]},
  {path:"login",component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
