import { Component } from '@angular/core'
import { Animal } from 'src/app/animal'
import { User } from 'src/app/animal'
import { ListService } from 'src/app/services/list.service'

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = []
  users: User[] = []

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

  constructor(private listService: ListService){
    this.getUsers()
  }

  removeAnimal(animal: Animal){
    this.animals = this.animals.filter((a) => animal.name !== a.name)
  }

  removeUser(user: User){
   this.users = this.users.filter((a) => user.name !== a.name)
   this.listService.remove(user.id).subscribe()
  }

  getUsers(): void {
    this.listService.getAllUsers().subscribe((users) => (this.users = users))
  }
}