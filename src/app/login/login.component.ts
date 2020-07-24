import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService } from '../_services/alert.service';
import { Response } from '../_models/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({});

  constructor(
    private userService: UserService, 
    private alert: AlertService,
    private router: Router) { }

  ngOnInit() {
    this.form.addControl('loginForm', new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    }));
  }

  get f() { return this.form.get('loginForm')['controls']; };

  login() {
    if (this.form.valid){
      const username = this.form.get('loginForm').get('username').value;
      const password = this.form.get('loginForm').get('password').value;

      this.userService.loginUser(username, password)
        .subscribe((data: Response) => {
          const response = data;

          if (response.code === 200) {
            this.alert.openSnackBar('Login successful');
            this.router.navigateByUrl('/petshop');
          }
          
        }, err => {
          console.log('login error', err.error);
          this.alert.openSnackBar('Unsuccessful' + `${err.error}`);
        })
    }
  }
}
