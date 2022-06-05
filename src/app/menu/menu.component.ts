import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Plate } from '../models/plate.model';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  plates: Plate[] = [];

  constructor(public authService: AuthService, public httpService: HttpService) {
    this.authService = new AuthService();
    this.httpService.getPlates().subscribe(res => {
      this.plates = res;
    })  }

  removePlate(id: number) {
    this.plates.forEach((element, index) => {
      if (element.id == id) {
        this.plates.splice(index, 1);
        return;
      }
    });
    this.httpService.deletePlate(id + "");
  }
}