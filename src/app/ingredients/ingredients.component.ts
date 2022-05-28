import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Ingredient } from '../models/ingredient.model';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {

  ingredients: Ingredient[] = [];

  constructor(public authService: AuthService, public ingredientService: IngredientService) {
    this.authService = new AuthService();
    //this.ingredientService = new IngredientService();
    //this.ingredients = ingredientService.getIngredients();
    this.ingredientService.currentIngredient.subscribe(ingredients => this.ingredients = ingredients);
   }


}
