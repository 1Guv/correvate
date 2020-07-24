import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PetshopHomeComponent } from './petshop-home/petshop-home.component';
import { PetDetailComponent } from './petshop-home/pet-detail/pet-detail.component';
import { PetAddComponent } from './petshop-home/pet-add/pet-add.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'petshop', component: PetshopHomeComponent},
  {path: 'pet/:id', component: PetDetailComponent},
  {path: 'pet-add', component: PetAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
