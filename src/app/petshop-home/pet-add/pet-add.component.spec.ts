import { async, TestBed } from '@angular/core/testing';
import { PetAddComponent } from './pet-add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('PetAddComponent', () => {
  let component: PetAddComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, MatSnackBarModule ],
      providers: [ PetAddComponent ]
    })
    component = TestBed.get(PetAddComponent)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
