import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';
import { from } from 'rxjs';

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

  groceryForm = new FormGroup({
    name: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    quantity: new FormControl<number | null>(null, Validators.required),
  });

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

  getTotal() {
    return this.grocery.length;
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.grocery.push({
      id: 45,
      name: form.value.name,
      quantity: form.value.quantity,
    });
    form.reset();
  }
  onSubmit2() {
    console.log(this.groceryForm);
    this.grocery.push({
      id: 45,
      name: this.groceryForm.value.name!,
      quantity: this.groceryForm.value.quantity!,
    });
  }
}
