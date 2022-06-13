import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Has } from "../models/has.model";
import { Ingredient } from "../models/ingredient.model";
import { Plate } from "../models/plate.model";

@Injectable({
    providedIn: 'root'
})

//deals with all the server calls that the components might need
export class HttpService {
    readonly ROOT_URL = 'http://localhost:3000/api';
    plates: Plate[] = new Array();
    ingredients: Ingredient[] = new Array();
    has: Has[] = new Array();

    constructor(public http: HttpClient) {
    }

    // returns the list of plates in the database
    getPlates(): Observable<Plate[]> {
        return this.http.get<Plate[]>(this.ROOT_URL + "/plates");
    }

    // returns the list of ingredients in the database
    getIngredients(): Observable<Ingredient[]> {
        return this.http.get<Ingredient[]>(this.ROOT_URL + "/ingredients");
    }

    // returns the list of plates in the database
    getHas(): Observable<Has[]> {
        return this.http.get<Has[]>(this.ROOT_URL + "/has");
    }

    // adds a plate to the database
    postPlate(plate: Plate) {
        this.http.post<Plate>(this.ROOT_URL + '/plates/new', plate, {
            responseType: 'text' as 'json'
        }).subscribe(res => {
            console.log('Plate created!');
        });
    }

    // adds an ingredient to the database
    postIngredient(ingredient: Ingredient) {
        this.http.post<Ingredient>(this.ROOT_URL + '/ingredients/new', ingredient, {
            responseType: 'text' as 'json'
        }).subscribe(res => {
            console.log('Ingredient created!');
        });
    }

    // adds an has to the database
    postHas(has: Has) {
        this.http.post<Has>(this.ROOT_URL + '/has/new', has, {
            responseType: 'text' as 'json'
        }).subscribe(res => {
            console.log('Has created!');
        });
    }

    // returns the plate with the specified id
    getPlateById(id: string): Observable<Plate> {
        return this.http.get<Plate>(this.ROOT_URL + "/plate/" + id);
    }

    // returns the list of ingredients of a specified plate id
    getIngredientsByPlateId(id: string): Observable<Ingredient[]> {
        return this.http.get<Ingredient[]>(this.ROOT_URL + "/plate/" + id + "/ingredients");
    }

    // changes the name and price of a plate
    updatePlateNamePrice(id: string, plate: Plate) {
        this.http.put<Plate>(this.ROOT_URL + '/plate/' + id, plate, {
            responseType: 'text' as 'json'
        }).subscribe(res => {
            console.log('Plate updated');
        });
    }

    // deletes the specified plate from the database
    deletePlate(id: string) {
        this.http.delete(this.ROOT_URL + "/plate/" + id,{
            responseType: 'text'
        }).subscribe(res => {
            console.log('Plate deleted!');
        });
    }

    // deltes the specified ingredient from the database
    deleteIngredient(id: string) {
        this.http.delete(this.ROOT_URL + "/ingredient/" + id,{
            responseType: 'text'
        }).subscribe(res => {
            console.log('Ingredient deleted!');
        });
    }

    // deletes the specified has from the database
    async deleteHas(plateId: number, ingredientId: number) {
        await this.http.delete(this.ROOT_URL + "/has/" + plateId + "/" + ingredientId, {
            responseType: 'text'
        }).subscribe(res => {
            console.log('Has deleted!');
        });
    }
}