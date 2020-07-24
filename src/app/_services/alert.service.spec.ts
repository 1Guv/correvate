import { TestBed, async } from '@angular/core/testing';
import { AlertService } from './alert.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('AlertService', () => {
  let component: AlertService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule ],
      providers: [ AlertService ]
    })
    component = TestBed.get(AlertService);
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
