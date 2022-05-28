import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Ingredient } from "../models/ingredient.model";
import { Plate } from "../models/plate.model";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    readonly ROOT_URL = 'http://localhost:3000/api';
    plates: Plate[] = new Array();
    ingredients: Ingredient[] = new Array();

    constructor(public http: HttpClient) {

    }

    getPlates(): Observable<Plate[]> {
        return this.http.get<Plate[]>(this.ROOT_URL + "/plates");
    }

    getIngredients(): Ingredient[] {
        this.http.get<Ingredient[]>(this.ROOT_URL + "/ingredients").subscribe(res => this.ingredients = res);
        return this.ingredients;
    }
}