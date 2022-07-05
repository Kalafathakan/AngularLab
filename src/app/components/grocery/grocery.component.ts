import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css'],
})
export class GroceryComponent implements OnInit {
  searchValue: string = '';
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
  deleteGrocery(id: number) {
    console.log(id);
    this.grocery = this.grocery.filter((g) => g.id !== id);
  }
  changeQuantity(id: number, data: number) {
    this.grocery = this.grocery.map((g) =>
      g.id === id
        ? {
            ...g,
            quantity:
              data > 0
                ? g.quantity + data
                : g.quantity > 0
                ? g.quantity + data
                : 0,
          }
        : g
    );
  }

  searchGrocery(eventData: Event) {
    console.log((<HTMLInputElement>eventData.target).value);
    this.grocery = this.grocery.filter((g) =>
      g.name
        .toLowerCase()
        .includes((<HTMLInputElement>eventData.target).value.toLowerCase())
    );
  }
}
