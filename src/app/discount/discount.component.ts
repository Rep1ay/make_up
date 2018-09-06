import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  discountData = {};
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  checkDiscount() {
    this.auth.checkDiscount(this.discountData)
    .subscribe(
      (res) => {
        localStorage.setItem('promoCode', res.promoCode.promoCode);
        this.discountData = {};
        this.router.navigate(['/products'], {queryParams: {showPromoBox: true}});
        window.location.reload();
      },
      (error) => console.log(error)
    );
  }
}
