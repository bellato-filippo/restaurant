export class Prova {
    id: number;
    name: string;
    price: number;
    
    constructor();
    constructor(id: number, name: string, price: number);
    constructor(id?: number, name?: string, price?: number) {
        this.id = id ?? 0;
        this.name = name ?? "";
        this.price = price ?? 0;
    }
}