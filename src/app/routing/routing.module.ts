import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { SingleProductComponent } from '../single-product/single-product.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SpecialProductsComponent } from '../special-products/special-products.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProductDiscountComponent } from '../product-discount/product-discount.component';
import { AuthGuard } from '../auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo : '/products', pathMatch: 'full'},
  { path: 'products', component : ProductsComponent,
    // canActivate: [AuthGuard]
},
  { path: 'product/:id', component: SingleProductComponent},
  { path: 'specialProducts', component: SpecialProductsComponent},
  { path: 'login', component : LoginComponent},
  { path: 'register', component : RegisterComponent},
  { path: 'productDiscount', component : ProductDiscountComponent},
  // {path: '*', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [
  ProductsComponent,
  SingleProductComponent,
  PageNotFoundComponent
];
