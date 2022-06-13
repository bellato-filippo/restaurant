// ingredient model
export class Ingredient {
    id: number;
    name: string;
    expirydate: Date;
    
    constructor();
    constructor(id: number, name: string, expirydate: Date);
    constructor(id?: number, name?: string, expirydate?: Date){
        this.id = id ?? 0;
        this.name = name ?? "";
        this.expirydate = expirydate ?? new Date();
    }
}