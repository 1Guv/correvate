import { async, TestBed } from '@angular/core/testing';
import { PetsAvailableComponent } from './pets-available.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PetTableComponent } from 'src/app/_elements/pet-table/pet-table.component';

describe('PetsAvailableComponent', () => {
  let component: PetsAvailableComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ PetsAvailableComponent, PetTableComponent ]
    })
    component = TestBed.get(PetsAvailableComponent);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
