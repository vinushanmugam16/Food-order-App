import { CanActivate } from "@angular/router";
import { UserService } from "../Service/user.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private user: UserService) {}
    canActivate(): boolean {
        if (this.user.login()) {
            return true;
        }
        else {
            alert('Please Login!');
            return false;
        }
    }
}