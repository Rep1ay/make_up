import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {ProductsCollectionClass} from '../productsCollectionClass';
import { Router, ActivatedRoute } from '@angular/router';
// import { SingleProductComponent } from '../single-product/single-product.component';
import {SingleProductModel} from '../singleProductModel';
import {ProdColl} from '../prod-coll';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
    // SingleProductComponent
})

export class ProductsComponent implements OnInit {
  showPreloader: boolean;
  showPromoBox = false;
  loggedIn: boolean;
  productsCollection: ProdColl[];
  brandList = [];
  box: any;
  private activePromoCode: boolean;
  discountValue = 20;
  btnText: string;
  singleProduct: SingleProductModel;
  constructor(  private productService: ProductsService,
                private router: Router,
                private route: ActivatedRoute,
                private _auth: AuthService,
  ) { }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.showPromoBox = false;
    // });
    this.activePromoCode = this._auth.activePromoCode();
    this.loggedIn = this._auth.loggedIn();
    this.showPreloader = true;
    this.productService.getProducts().subscribe(
      (data) => {this.productsCollection = data;
        this.showPreloader = false; },
      (error) => this.errorHandler(error)
    );
  }

  onSelect(productId) {
    this.router.navigate(['/product', productId]);
  }

  errorHandler(error) {
    console.error(error);
  }
  getDiscount() {
    if (this.loggedIn) {
      if (this.activePromoCode) {
        this.router.navigate(['/productDiscount']);
      } else {
        this.showPromoBox = true;
      }
    } else {
       this.router.navigate(['/login']);
    }
  }

  showPromoBoxFunc(box) {
    box.classList.toggle('show');
  }
}
