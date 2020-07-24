import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/_models/pet';
import { PetsService } from 'src/app/_services/pets.service';

@Component({
  selector: 'app-pets-pending',
  templateUrl: './pets-pending.component.html',
  styleUrls: ['./pets-pending.component.scss']
})
export class PetsPendingComponent implements OnInit {

  pendingPets: Pet;

  constructor(private pets: PetsService) { }

  ngOnInit() {
    this.pets.getPendingPets()
      .subscribe(pets => {
        this.pendingPets = pets;
      })
  }

}
