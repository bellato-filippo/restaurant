import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    admin: boolean;

    constructor() {
        this.admin = true;
    }

    isAdmin() {
        return this.admin;
    }
}