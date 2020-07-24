import { async, TestBed } from '@angular/core/testing';
import { PetshopHomeComponent } from './petshop-home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('PetshopHomeComponent', () => {
  let component: PetshopHomeComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, MatSnackBarModule, RouterTestingModule ],
      providers: [ PetshopHomeComponent ]
    })
    component = TestBed.get(PetshopHomeComponent);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
