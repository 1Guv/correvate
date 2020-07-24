import { async, TestBed } from '@angular/core/testing';
import { PetsSoldComponent } from './pets-sold.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PetTableComponent } from 'src/app/_elements/pet-table/pet-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PetsSoldComponent', () => {
  let component: PetsSoldComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ PetsSoldComponent, PetTableComponent ]
    })
    component = TestBed.get(PetsSoldComponent);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
