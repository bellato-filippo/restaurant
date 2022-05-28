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

  ingredients: Ingredient[] = [];

  constructor(public authService: AuthService, public httpService: HttpService) {
    this.authService = new AuthService();
    this.httpService.getIngredients().subscribe(res => {
      this.ingredients = res;
    })
   }


}
