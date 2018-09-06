import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { RouterModule } from '@angular/router';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { AppRoutingModule, routingComponents } from './routing/routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialProductsComponent } from './special-products/special-products.component';
import { AuthService } from './auth.service';
import { ProductDiscountComponent } from './product-discount/product-discount.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { DiscountComponent } from './discount/discount.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    PreloaderComponent,
    FilterBarComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    SpecialProductsComponent,
    ProductDiscountComponent,
    DiscountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpClientModule, AuthService, AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
