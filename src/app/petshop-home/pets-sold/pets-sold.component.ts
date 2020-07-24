import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/_services/pets.service';
import { Pet } from 'src/app/_models/pet';

@Component({
  selector: 'app-pets-sold',
  templateUrl: './pets-sold.component.html',
  styleUrls: ['./pets-sold.component.scss']
})
export class PetsSoldComponent implements OnInit {

  soldPets: Pet;

  constructor(private pets: PetsService) { }

  ngOnInit() {
    this.pets.getSoldPets()
      .subscribe(pets => {
        this.soldPets = pets;
      })
  }

}
