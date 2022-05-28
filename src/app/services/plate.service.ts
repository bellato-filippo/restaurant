import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Ingredient } from "../models/ingredient.model";
import { Plate } from "../models/plate.model";

@Injectable({
    providedIn: 'root'
})

export class PlateService {

    plates: Plate[];

    private plateSource: BehaviorSubject<Plate[]>;
    currentPlate: Observable<Plate[]>;

    

    constructor() {
        this.plates = [];

        let carb: Ingredient[] = [];
        carb.push(new Ingredient(1, "pasta", new Date("1/12/2025")));
        carb.push(new Ingredient(2, "salt", new Date("1/12/2030")));
        this.plates.push(new Plate(1, "pasta carbonara", 4.5, carb));

        let ris: Ingredient[] = [];
        ris.push(new Ingredient(3, "rice", new Date("1/12/2025")));
        ris.push(new Ingredient(2, "salt", new Date("1/12/2030")));
        this.plates.push(new Plate(2, "risotto", 6, ris));

        
        this.plates.push(new Plate(3, "soup", 3, []));

        this.plateSource = new BehaviorSubject<Plate[]>(this.plates);
        this.currentPlate = this.plateSource.asObservable();
    }

    changeMessage(newPlate: Plate[]) {
        this.plateSource.next(newPlate);
    }

    getPlates() {
        return this.plates;
    }
}