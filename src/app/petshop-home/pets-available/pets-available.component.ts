import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/_services/pets.service';
import { Pet } from 'src/app/_models/pet';

@Component({
  selector: 'app-pets-available',
  templateUrl: './pets-available.component.html',
  styleUrls: ['./pets-available.component.scss'],
})
export class PetsAvailableComponent implements OnInit {

  availablePets: Pet;

  constructor(private pets: PetsService) { }

  ngOnInit() {
    this.pets.getAvailablePets()
      .subscribe(pets => {
        this.availablePets = pets;
      })
  }

}
