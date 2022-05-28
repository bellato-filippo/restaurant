import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from '../models/ingredient.model';
import { Plate } from '../models/plate.model';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent {


  //plates: Plate[] = [];
  plate: Plate = new Plate();
  id: number;
  plateEdit: boolean;
  ingredients: Ingredient[] = [];

  constructor(public route: ActivatedRoute, public httpService: HttpService, public authService: AuthService) {
    this.plateEdit = false;
    this.httpService.getIngredients().subscribe(res => {
      this.ingredients = res;
    });
    /*
    this.httpService.getPlates().subscribe(res => {
      this.plates = res;
    });
    */
    let id = this.route.snapshot.paramMap.get('id') ?? "0";
    this.id = +id;
    this.httpService.getPlateId().subscribe(res => {
      this.plate = res;
    });
   }

   edit() {
     this.plateEdit = !this.plateEdit;
    }

    addIngredient(ingredientId: number) {
      this.ingredients.forEach((element, index) => {
        if (element.id == ingredientId) {
          return;
        }
      });
    }
}
