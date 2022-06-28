import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css'],
})
export class GroceryComponent implements OnInit {
  grocery = [
    {
      name: 'Apples',
      quantity: 2,
      id: 1,
    },
    {
      name: 'Eggs',
      quantity: 4,
      id: 2,
    },
    {
      name: 'Oranges',
      quantity: 3,
      id: 3,
    },
    {
      name: 'Cucumber',
      quantity: 2,
      id: 4,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
