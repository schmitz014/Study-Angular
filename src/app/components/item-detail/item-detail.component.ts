import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { User } from 'src/app/animal'

import { ListService } from 'src/app/services/list.service'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  user?: User

  constructor(private listService: ListService, private route: ActivatedRoute){
    this.getUser()
  }

  getUser(){
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.listService.getItem(id).subscribe((user) => (this.user = user))
  }
}
