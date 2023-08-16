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

  remove(id: number){
    return this.http.delete<User>(`${this.apiUrl}/${id}`)
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
  }

  getItem(id: number): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/${id}`)
  }
}