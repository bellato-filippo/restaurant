import { Plate } from "./plate.model";

export class Ingredient {
    id: number;
    name: string;
    expiryDate: Date;
    //plates: Plate[] = [];
    
    constructor();
    constructor(id: number, name: string, expiryDate: Date);
    constructor(id?: number, name?: string, expiryDate?: Date){
        this.id = id ?? 0;
        this.name = name ?? "";
        this.expiryDate = expiryDate ?? new Date();
        //this.plates = plates ?? [];
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getExpiryDate() {
        return this.expiryDate;
    }
}