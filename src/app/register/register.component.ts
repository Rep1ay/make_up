import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  constructor( private _auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    // this.registerUserData
    this._auth.registerNewUser(this.registerUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/products']);
      },
      (error) => console.error(error)
    );
  }
}
