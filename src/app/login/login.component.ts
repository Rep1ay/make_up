import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
loginUserData = {};
  constructor( private _auth: AuthService,
                private router: Router) { }

  ngOnInit() {
  }

  loginUser( form: NgForm) {
    this._auth.loginUser(form.value)
    .subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/products']);
        window.location.reload();
      },
      (error) => console.log(error)
    );
  }
}
