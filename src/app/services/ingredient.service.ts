import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Ingredient } from "../models/ingredient.model";

@Injectable({
    providedIn: 'root'
})

export class IngredientService {
    ingredients: Ingredient[];

    private ingredientSource: BehaviorSubject<Ingredient[]>;
    currentIngredient: Observable<Ingredient[]>;

    constructor() {
        this.ingredients = [];
        this.ingredients.push(new Ingredient(1, "pasta", new Date("1/12/2025")));
        this.ingredients.push(new Ingredient(2, "salt", new Date("1/12/2030")));
        this.ingredients.push(new Ingredient(3, "rice", new Date("1/12/2025")));

        this.ingredientSource = new BehaviorSubject<Ingredient[]>(this.ingredients);
        this.currentIngredient = this.ingredientSource.asObservable();
    }

    changeMessage(newIngredient: Ingredient[]) {
        this.ingredientSource.next(newIngredient);
    }

    getIngredients() {
        return this.ingredients;
    }
}