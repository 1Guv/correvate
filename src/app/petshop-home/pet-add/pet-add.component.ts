import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertService } from 'src/app/_services/alert.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pet, Category } from 'src/app/_models/pet';
import { PetsService } from 'src/app/_services/pets.service';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.scss']
})
export class PetAddComponent implements OnInit {

  form = new FormGroup({});
  addNewPet: Pet = {
    id: 100,
    category: { id: 1, name: ''},
    name: '',
    photoUrls: [],
    tags: [],
    status: '',
    length: 0
  };
  category: Array<Category> = [
    {id: 1, name: 'Cats'},
    {id: 2, name: 'Dogs'},
    {id: 3, name: 'Rabbits'},
    {id: 4, name: 'Lions'},
    {id: 5, name: 'Tigers'},
    {id: 6, name: 'Pig'},
  ]

  status = [
    {name: 'available'},
    {name: 'sold'},
    {name: 'pending'}
  ];

  constructor(
    private pets: PetsService,
    private alert: AlertService,
    private router: Router) { }

    ngOnInit() {
      this.form.addControl('addPetForm', new FormGroup({
        name: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required]),
        url1: new FormControl('', [Validators.required]),
        url2: new FormControl('', [Validators.required]),
        tag1: new FormControl('', [Validators.required]),
        tag2: new FormControl('', [Validators.required]),
        status: new FormControl('', [Validators.required]),
      }))
    }
  
    get f() { return this.form.get('addPetForm')['controls']; };
  
    addPet() {
      console.log('add pet');
  
      if (this.form.valid) {
        // this.addNewPet = {...this.form.get('addPetForm').value};
        const form = this.form.get('addPetForm');
  
        this.addNewPet.name = form.get('name').value;
        this.addNewPet.category = form.get('category').value;
        this.addNewPet.photoUrls.push(form.get('url1').value);
        this.addNewPet.photoUrls.push(form.get('url2').value);
  
        const tags = [
          {id: 1, name: form.get('tag1').value},
          {id: 2, name: form.get('tag2').value},
        ]
  
        this.addNewPet.tags = tags;
        this.addNewPet.status = form.get('status').value;
        this.addNewPet.id = form.value.length + 1;
  
        console.log('addNewPet', this.addNewPet);
  
        this.pets.addPet(this.addNewPet).subscribe((response: Pet) => {
          console.group('addPet response', response);

            this.alert.openSnackBar('Pet added successful');
            this.router.navigateByUrl('/petshop');
            console.log('get available pets');
        },
        err => {
          console.log('Pet add error', err.error);
          this.alert.openSnackBar('Adding pet was unsuccessful' + `${err.error}`);
        })
      }
    }

}
