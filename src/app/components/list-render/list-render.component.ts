import { Component } from '@angular/core'
import { Animal } from 'src/app/animal'
import { ListService } from 'src/app/services/list.service'

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Babi", type: "Dog", age: 5},
    {name: "Katze", type: "Cat", age: 7},
    {name: "Mimosa", type: "Cow", age: 10},
    {name: "Bacon", type: "Pig", age: 1}
  ]

  animal: Animal = {
    name: "Babi",
    type: "Dog",
    age: 5,
  }

  animalDetails = ''

  showAge(animal: Animal): void {
    this.animalDetails = `${animal.name} is ${animal.age} years old.`

    if(animal.age === 1){
     this.animalDetails = `${animal.name} is ${animal.age} year old.`
    }
  }

  constructor(private listService: ListService){}

  removeAnimal(animal: Animal){
    console.log(`Removing ${animal.name} from animal list.`)
    this.animals = this.listService.remove(this.animals, animal)
  }
}
