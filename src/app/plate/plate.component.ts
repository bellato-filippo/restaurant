import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from '../models/ingredient.model';
import { Plate } from '../models/plate.model';
import { AuthService } from '../services/auth.service';
import { IngredientService } from '../services/ingredient.service';
import { PlateService } from '../services/plate.service';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent {


  plates: Plate[] = [];
  plate: Plate = new Plate();
  id: number;
  plateEdit: boolean;
  ingredients: Ingredient[] = [];

  constructor(public route: ActivatedRoute, public plateService: PlateService, public authService: AuthService, public ingredientService: IngredientService) {
    this.plateEdit = false;
    this.ingredientService.currentIngredient.subscribe(ingredients => this.ingredients = ingredients);
    this.plateService.currentPlate.subscribe(plates => this.plates = plates);
    let id = this.route.snapshot.paramMap.get('id') ?? "0";
    this.id = +id;
    this.plates.forEach((element, index) => {
      if(this.plates[index].id == this.id) {
        this.plate = this.plates[index];
      }
    });
   }

   edit() {
     this.plateEdit = !this.plateEdit;
    }

    addIngredient(ingredientId: number) {
      this.ingredients.forEach((element, index) => {
        if (element.getId() == ingredientId) {
          this.plate.ingredients.push(this.ingredients[index]);
          this.updatePlates();
          return;
        }
      });
    }

    updatePlates() {
      this.plateService.changeMessage(this.plates);
    }

}
