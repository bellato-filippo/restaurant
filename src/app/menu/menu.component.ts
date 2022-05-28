import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Plate } from '../models/plate.model';
import { PlateService } from '../services/plate.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  plates: Plate[] = [];

  constructor(public authService: AuthService, public plateService: PlateService) {
    this.authService = new AuthService();
    this.plateService.currentPlate.subscribe(plates => this.plates = plates)
  }

  removePlate(id: number) {
    this.plates.forEach((element, index) => {
      if (element.id == id) {
        this.plates.splice(index, 1);
      }
    });
    this.updatePlates();
  }

  updatePlates() {
    this.plateService.changeMessage(this.plates);
  }
}