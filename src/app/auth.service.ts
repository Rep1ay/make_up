import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';
  private _checkDiscountUrl = 'http://localhost:3000/api/discounts';
  constructor( private http: HttpClient,
              private router: Router) { }

  registerNewUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  checkDiscount(promoCode) {
    return this.http.post<any>(this._checkDiscountUrl, promoCode);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  activePromoCode() {
    return !!localStorage.getItem('promoCode');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

