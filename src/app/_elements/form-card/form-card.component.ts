import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-card',
  template: `
  <mat-card class="mat-elevation-z8 m-5">
    <div class="header-bg"></div>
    <mat-card-title class="text-left mx-5">{{ title }}</mat-card-title>
    <ng-content></ng-content>
  </mat-card>`,
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
