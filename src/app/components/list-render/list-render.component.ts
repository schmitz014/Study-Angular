import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals = [
    {name: "Dog", sound: "Woof!"},
    {name: "Cat", sound: "Meow!"},
    {name: "Cow", sound: "Moo!"},
    {name: "Pig", sound: "Oink!"}
  ]
}
