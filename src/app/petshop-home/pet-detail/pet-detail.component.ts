import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from 'src/app/_services/pets.service';
import { Pet } from 'src/app/_models/pet';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {

  pet: Pet;

  constructor(private route: ActivatedRoute, private pets: PetsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);

      this.pets.findPetById(params.id)
        .subscribe((pet: Pet) => {
          console.log('pet by id', pet);
          this.pet = pet;
        })
    });
    
  }

}
