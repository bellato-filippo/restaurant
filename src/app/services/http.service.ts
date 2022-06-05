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
        this.http.post<Plate>(this.ROOT_URL + '/plates/new', plate, {
            responseType: 'text' as 'json'
        }).subscribe(res => {
            console.log('Plate created!');
        });
    }

    postIngredient(ingredient: Ingredient) {
        this.http.post<Ingredient>(this.ROOT_URL + '/ingredients/new', ingredient, {
            responseType: 'text' as 'json'
        }).subscribe(res => {
            console.log('Ingredient created!');
        });
    }


    postHas(has: Has) {
        this.http.post<Has>(this.ROOT_URL + '/has/new', has, {
            responseType: 'text' as 'json'
        }).subscribe(res => {
            console.log('Has created!');
        });
    }

    getPlateById(id: string): Observable<Plate> {
        return this.http.get<Plate>(this.ROOT_URL + "/plate/" + id);
    }

    getIngredientsByPlateId(id: string): Observable<Ingredient[]> {
        return this.http.get<Ingredient[]>(this.ROOT_URL + "/plate/" + id + "/ingredients");
    }

    deletePlate(id: string) {
        this.http.delete(this.ROOT_URL + "/plate/" + id,{
            responseType: 'text'
        }).subscribe(res => {
            console.log('Plate deleted!');
        });
    }

    deleteIngredient(id: string) {
        this.http.delete(this.ROOT_URL + "/ingredient/" + id,{
            responseType: 'text'
        }).subscribe(res => {
            console.log('Ingredient deleted!');
        });
    }

    deleteHas(plateId: number, ingredientId: number) {
            this.http.delete(this.ROOT_URL + "/has/" + plateId + "/" + ingredientId, {
            responseType: 'text'
        }).subscribe(res => {
            console.log('Has deleted!');
        });
    }
}