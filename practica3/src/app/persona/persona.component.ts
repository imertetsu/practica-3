import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  people: any[] = [
    {
      name: "Douglas  Pace",
      age: 35,
      country: 'BO'
    },
    {
      name: "Mcleod  Mueller",
      age: 32,
      country: 'USA'
    },
    {
      name: "Day  Meyers",
      age: 21,
      country: 'BO'
    },
    {
      name: "Aguirre  Ellis",
      age: 34,
      country: 'USA'
    },
    {
      name: "Cook  Tyson",
      age: 32,
      country: 'BO'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
