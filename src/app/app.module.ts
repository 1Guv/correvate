import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { FormCardComponent } from './_elements/form-card/form-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PetshopHomeComponent } from './petshop-home/petshop-home.component';
import { PetsAvailableComponent } from './petshop-home/pets-available/pets-available.component';
import { PetsPendingComponent } from './petshop-home/pets-pending/pets-pending.component';
import { PetsSoldComponent } from './petshop-home/pets-sold/pets-sold.component';
import { PetTableComponent } from './_elements/pet-table/pet-table.component';
import { MatTableModule } from '@angular/material/table';
import { PetDetailComponent } from './petshop-home/pet-detail/pet-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { PetAddComponent } from './petshop-home/pet-add/pet-add.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FormCardComponent,
    PetshopHomeComponent,
    PetsAvailableComponent,
    PetsPendingComponent,
    PetsSoldComponent,
    PetTableComponent,
    PetDetailComponent,
    PetAddComponent
  ],
  entryComponents:[],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
