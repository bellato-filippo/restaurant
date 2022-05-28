export class Has {
    plate: number;
    ingredient: string;
    
    constructor();
    constructor(plate: number, ingredient: string);
    constructor(plate?: number, ingredient?: string){
        this.plate = plate ?? 0;
        this.ingredient = ingredient ?? "";
    }
}