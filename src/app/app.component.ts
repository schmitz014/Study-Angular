import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userName = 'John'
  userData = {
    email: 'john@gmail.com',
    age: 25,
    address: 'USA',
    phone: '1234567890',
    role: 'Admin'
  }
  title = 'Project-Angular'
}