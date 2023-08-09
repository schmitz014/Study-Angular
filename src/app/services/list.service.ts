import { Injectable } from '@angular/core';
import { Animal } from '../animal';
import { User } from '../animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name)
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
  }
}
