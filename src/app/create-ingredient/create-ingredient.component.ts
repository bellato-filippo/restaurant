import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingredient } from '../models/ingredient.model';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.css']
})
export class CreateIngredientComponent {

  form: FormGroup;
  ingredients: Ingredient[] = [];


  constructor(public formBuilder: FormBuilder, public ingredientService: IngredientService, public router: Router) {
    this.ingredientService.currentIngredient.subscribe(ingredients => this.ingredients = ingredients); 
    this.form = formBuilder.group({
      'name': ['', Validators.required],
      'expiryDate': ['', Validators.required]
    });
  }

  send() {
    if(!this.form.valid){
      alert("Please fill all fields")
      return;
    }
    let name = this.form.controls['name'].value;
    let date = this.form.controls['expiryDate'].value;
    let lastId = this.ingredients[this.ingredients.length - 1].getId();
    this.ingredients.push(new Ingredient(lastId + 1, name, date));
    this.updateIngredients();
    this.router.navigate(['/ingredients']);
  }

  updateIngredients() {
    this.ingredientService.changeMessage(this.ingredients);
  }

}
