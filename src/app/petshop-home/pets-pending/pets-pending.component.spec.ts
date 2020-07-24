import { async, TestBed } from '@angular/core/testing';

import { PetsPendingComponent } from './pets-pending.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PetTableComponent } from 'src/app/_elements/pet-table/pet-table.component';

describe('PetsPendingComponent', () => {
  let component: PetsPendingComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ PetsPendingComponent, PetTableComponent ]
    })
    component = TestBed.get(PetTableComponent);
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
