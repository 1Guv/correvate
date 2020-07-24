import { async, TestBed } from '@angular/core/testing';
import { PetTableComponent } from './pet-table.component';

describe('PetTableComponent', () => {
  let component: PetTableComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ PetTableComponent ]
    })
    component = TestBed.get(PetTableComponent);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
