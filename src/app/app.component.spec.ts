import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AppComponent
      ],
    })
    component = TestBed.get(AppComponent);
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
