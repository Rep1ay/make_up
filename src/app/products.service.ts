import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { ProductsCollectionClass } from './productsCollectionCLass';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import {ProdColl} from './prod-coll';
import { SingleProd } from './single-prod';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
url;
  constructor( private http: HttpClient) {
    // this.url = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick';
    this.url = '../assets/products.json';
  }

  getProducts(): Observable<ProdColl[]> {
    return this.http.get<ProdColl[]>(this.url);
  }
  getSingleProduct(): Observable<SingleProd> {
    return this.http.get<SingleProd>(this.url);
  }
}
