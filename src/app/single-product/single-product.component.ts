import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { ProductsService } from '../products.service';
import {ProductsComponent} from '../products/products.component';
import {SingleProductModel} from '../singleProductModel';
import {ProductsCollectionClass} from '../productsCollectionClass';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
  providers: [ProductsComponent]
})
export class SingleProductComponent implements OnInit {
  singleProduct: SingleProductModel;
  showPreloader: boolean;
  id;
  productsCollection: ProductsCollectionClass[] = [];
  constructor(  private _route: ActivatedRoute,
                private _router: Router,
                private productService: ProductsService,
  ) { }

  ngOnInit() {
    this.id = +this._route.snapshot.params['id'];
    this.showPreloader = true;
    this.productService.getProducts().subscribe(
      (res) => this.getProducts(res),
      (error) => this.errorHandler(error)
    );
  }
  getProducts(res) {
    this.singleProduct = res.find(e => {
      if(e.id ===  this.id){
        this.showPreloader = false;
        return e.id
      }
    })
  }

  errorHandler(error) {
    console.error(error);
  }
}
