import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { AlertService } from '../_services/alert.service';
import { Response } from '../_models/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({});
  newUser: User;
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phonePattern: string = "[0-9 ]{11}";

  constructor(
    private userService: UserService, 
    private alert: AlertService,
    private router: Router) { }

  ngOnInit() {
    this.form.addControl('registerForm', new FormGroup({
      username: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)])
    }));
  }

  get f() { return this.form.get('registerForm')['controls']; };

  register() {
    console.log('register');
    if (this.form.valid) {
      this.newUser = {...this.form.get('registerForm').value};
      this.newUser.id = 10;
      this.newUser.userStatus = 0;

      this.userService.registerUser(this.newUser)
        .subscribe((data: Response) => {
          const response = data;

          if (response.code === 200) {
            this.alert.openSnackBar('Register successful');
            this.router.navigateByUrl('/login');
          }

        }, err => {
          console.log('register error', err.error);
          this.alert.openSnackBar('Register Unsuccessful' + `${err.error}`);
        })
    }

  }

}

