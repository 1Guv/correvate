import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailComponent } from './pet-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PetDetailComponent', () => {
  let component: PetDetailComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ PetDetailComponent ]
    })
    component = TestBed.get(PetDetailComponent);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
