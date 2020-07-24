import { TestBed, async } from '@angular/core/testing';
import { PetsService } from './pets.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Pet } from '../_models/pet';

describe('PetsService', () => {
  let component: PetsService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ PetsService ]
    })
    component = TestBed.get(PetsService);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should get sold pets data', () => {
    component.getSoldPets()
      .subscribe(pets => {
        expect(pets).toBeTruthy();
      });

      const req = httpTestingController.expectOne('http://localhost/v2/pet/findByStatus?status=sold');
      expect(req.request.method).toEqual("GET");
      req.flush({payload: Object.values(Pet)});
  })
});
