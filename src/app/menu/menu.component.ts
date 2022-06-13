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
  
  // list of plates
  plates: Plate[] = [];

  constructor(public authService: AuthService, public httpService: HttpService) {
    // gets the plates through the http service
    this.httpService.getPlates().subscribe(res => {
      this.plates = res;
    })  }

  // removes the plate
  removePlate(id: number) {
    this.plates.forEach((element, index) => {
      if (element.id == id) {
        // deletes the plate from the dynamic list
        this.plates.splice(index, 1);
        return;
      }
    });
    this.httpService.deletePlate(id + "");
  }
}