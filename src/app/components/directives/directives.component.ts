import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  size = 16 
  font = 'Arial'
  color = 'blue'

  classes = ['bold', 'underline']

  italic = 'italic'
}
