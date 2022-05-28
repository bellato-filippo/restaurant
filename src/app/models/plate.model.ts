import { Ingredient } from "./ingredient.model";

export class Plate {
    id: number;
    name: string;
    price: number;
    ingredients: Ingredient[];

    
    constructor();
    constructor(id: number, name: string, price: number, ingredients: Ingredient[]);
    constructor(id?: number, name?: string, price?: number, ingredients?: Ingredient[]) {
        this.id = id ?? 0;
        this.name = name ?? "";
        this.price = price ?? 0;
        this.ingredients = ingredients ?? [];
    }
}