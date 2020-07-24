import { async, TestBed } from '@angular/core/testing';
import { FormCardComponent } from './form-card.component';

describe('FormCardComponent', () => {
  let component: FormCardComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ FormCardComponent ]
    })
    component = TestBed.get(FormCardComponent);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
