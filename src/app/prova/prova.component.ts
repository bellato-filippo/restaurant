import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Prova } from '../models/prova.model';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {

  //readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  readonly ROOT_URL = 'http://localhost:3000/api';

  posts: Observable<Prova[]> = new Observable<Prova[]>();


  constructor(private http: HttpClient) {
   }

   getPosts() {
    this.posts = this.http.get<Prova[]>(this.ROOT_URL + "/plate");
   }

}
