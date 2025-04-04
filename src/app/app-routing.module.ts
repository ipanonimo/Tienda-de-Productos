import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductdetailsComponent } from './views/productdetails/productdetails.component';
import { CartComponent } from './views/cart/cart.component';
import { AboutComponent } from './views/about/about.component';

const routes: Routes = [
  { path: '',component: HomeComponent,pathMatch: 'full'},
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductdetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
