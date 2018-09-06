import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  productCollection: any;
  constructor(private productService: ProductsService,
              private _authService: AuthService) { }

  ngOnInit() {
    // this.productService.getProductParams().subscribe(
    //   (res) => this.renderNavBar(res)
    // );
  }

  renderNavBar(responce) {
    const res = responce;
    // debugger
  }
  showProductsCollection(collection) {
    collection.classList.toggle('show');
  }
}
