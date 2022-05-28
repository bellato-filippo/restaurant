import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Plate } from '../models/plate.model';
import { HttpService } from '../services/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  plates: Plate[] = new Array();

  constructor(public authService: AuthService, public httpService: HttpService) {
    this.httpService.getPlates().subscribe(res => {
      this.plates = res;
    })
  }




}