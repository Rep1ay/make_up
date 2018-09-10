import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import { AuthService } from '../auth.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { faUser  } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  productCollection: any;
  faUser  = faUser;
  formInput: string;
  constructor(private productService: ProductsService,
              private _authService: AuthService,
              private route: Router) { }

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
  routeToSearch(input) {
    if (input.value.length >= 2) {
        this.route.navigate(['/search'], {queryParams: {value: input.value}});
        window.location.reload();
      } else {
        input.classList.add('notValid');
        setTimeout(() => {
          input.classList.remove('notValid');
        }, 1000 );
      }
  }
}
