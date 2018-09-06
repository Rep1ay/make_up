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
                private productsComponent: ProductsComponent
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
    // const res = responce.json();
    for (let i = 0; i < 10; i++) {
      const product = new SingleProductModel(  res[i].name,
                                    res[i].brand,
                                    res[i].price,
                                    res[i].category,
                                    res[i].image_link,
                                    res[i].product_link,
                                    res[i].description,
                                    res[i].id);
    this.productsCollection.push(product);
    }
    this.showPreloader = false;
    this.renderProduct();
  }
  errorHandler(error) {
    console.error(error);
  }
  renderProduct() {
    this.singleProduct = this.productsCollection.find(e => e.id ===  this.id);
  }
}
