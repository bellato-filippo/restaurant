export class Has {
    plate: number;
    ingredient: number;
    
    constructor();
    constructor(plate: number, ingredient: number);
    constructor(plate?: number, ingredient?: number){
        this.plate = plate ?? 0;
        this.ingredient = ingredient ?? 0;
    }
}