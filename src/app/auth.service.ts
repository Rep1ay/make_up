import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private stateSource = new Subject();
  _state = this.stateSource.asObservable();

  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';
  private _checkDiscountUrl = 'http://localhost:3000/api/discounts';
  constructor( private http: HttpClient,
              private router: Router) { }

  selectedUser: User = {
    email: '',
    password: ''
  }
  
  isLoggedIn(state) {
    this.stateSource.next(state);
  }

  registerNewUser(user) {
    return this.http.post<any>(this._registerUrl, this.selectedUser);
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, this.selectedUser);
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
    localStorage.removeItem('promoCode');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

