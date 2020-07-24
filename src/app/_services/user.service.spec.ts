import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { Response } from '../_models/response';

describe('UserService', () => {
  let component: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ UserService ]
    })
    component = TestBed.get(UserService);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should log out user', () => {
    component.logOut()
      .subscribe(response => {
        expect(response).toBeTruthy();
      });

      const req = httpTestingController.expectOne('http://localhost/v2/user/logout');
      expect(req.request.method).toEqual("GET");
      req.flush({payload: Object.values(Response)});
  })
});
