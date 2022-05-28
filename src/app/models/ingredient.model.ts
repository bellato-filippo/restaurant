export class Ingredient {
    id: number;
    name: string;
    expiryDate: Date;
    
    constructor();
    constructor(id: number, name: string, expiryDate: Date);
    constructor(id?: number, name?: string, expiryDate?: Date){
        this.id = id ?? 0;
        this.name = name ?? "";
        this.expiryDate = expiryDate ?? new Date();
    }
}