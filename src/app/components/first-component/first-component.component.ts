import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent {
  name: string = 'Peter'
  age: number = 25
  job: string = 'Developer'
  hobbies: string[] = ['Sports', ' Cooking']
  address: Address = {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  }
  car: Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1964
  }
}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Car {
  brand: string,
  model: string,
  year: number
}