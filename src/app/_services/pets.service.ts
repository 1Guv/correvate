import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../_models/pet'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  headers = { 
    'accept': 'application/json',
    'Content-Type': 'application/json',
  };

  url: string = 'http://localhost/v2/pet';

  constructor(private http: HttpClient) {}
  
  getSoldPets(): Observable<Pet> {
    return this.http.get<Pet>(this.url + '/findByStatus?status=sold', {headers: this.headers});
  }

  getAvailablePets(): Observable<Pet> {
    return this.http.get<Pet>(this.url + '/findByStatus?status=available', {headers: this.headers});
  }

  getPendingPets(): Observable<Pet> {
    return this.http.get<Pet>(this.url + '/findByStatus?status=pending', {headers: this.headers});
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.url, pet, {headers: this.headers});
  }

  findPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(this.url + '/' + id, {headers: this.headers});
  }
}
