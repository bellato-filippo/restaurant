import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Has } from "../models/has.model";
import { Ingredient } from "../models/ingredient.model";
import { Plate } from "../models/plate.model";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    readonly ROOT_URL = 'http://localhost:3000/api';
    plates: Plate[] = new Array();
    ingredients: Ingredient[] = new Array();
    has: Has[] = new Array();

    constructor(public http: HttpClient) {

    }

    getPlates(): Observable<Plate[]> {
        return this.http.get<Plate[]>(this.ROOT_URL + "/plates");
    }

    getIngredients(): Observable<Ingredient[]> {
        return this.http.get<Ingredient[]>(this.ROOT_URL + "/ingredients");
    }

    getHas(): Observable<Has[]> {
        return this.http.get<Has[]>(this.ROOT_URL + "/has");
    }

    postPlate(plate: Plate) {
        this.http.post<Plate>(this.ROOT_URL + '/plates/new', plate);
    }

    postIngredient(ingredient: Ingredient) {
        this.http.post<Ingredient>(this.ROOT_URL + '/ingredients/new', ingredient);
    }

    postHas(has: Has) {
        this.http.post<Has>(this.ROOT_URL + '/has/new', has);
    }

    getPlateId(): Observable<Plate> {
        return this.http.get<Plate>(this.ROOT_URL + "/plate/6");
    }
}