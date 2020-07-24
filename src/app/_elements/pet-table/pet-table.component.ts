import { Component, OnInit, Input } from '@angular/core';
import { Pet, Columns } from 'src/app/_models/pet';

@Component({
  selector: 'app-pet-table',
  templateUrl: './pet-table.component.html',
  styleUrls: ['./pet-table.component.scss']
})
export class PetTableComponent implements OnInit {

  @Input() data: Pet;
  @Input() columns: Array<Columns>;

  constructor() { }

  ngOnInit() {
  }

}
