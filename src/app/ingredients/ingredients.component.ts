import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Ingredient } from '../models/ingredient.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {

  // the list of ingredients
  ingredients: Ingredient[] = [];

  constructor(public authService: AuthService, public httpService: HttpService) {
    // gets the list of ingredients from the database
    this.httpService.getIngredients().subscribe(res => {
      this.ingredients = res;
    });
   }

   // removes the ingredient through the http service
   removeIngredient(id: number) {
    this.ingredients.forEach((element, index) => {
      // removes the ingredient from the dynamic list
      if (element.id == id) {
        this.ingredients.splice(index, 1);
        return;
      }
    });
    this.httpService.deleteIngredient(id + "");
   }

}
