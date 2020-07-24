import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Response } from '../_models/response';
import { AlertService } from '../_services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-petshop-home',
  templateUrl: './petshop-home.component.html',
  styleUrls: ['./petshop-home.component.scss'],
})
export class PetshopHomeComponent implements OnInit {

  constructor(
    private userService: UserService,
    private alert: AlertService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logOut()
      .subscribe((response: Response) => {
        if (response.code === 200) {
          this.alert.openSnackBar('Logout successful');
          this.router.navigateByUrl('/login');
        }
      }, err => {
        console.log('login error', err.error);
        this.alert.openSnackBar('You have been logged out' + `${err.error}`);
      });
  }

  openAddPetForm() {
    console.log('adding pet');
    this.router.navigateByUrl('/pet-add');
  }

}
