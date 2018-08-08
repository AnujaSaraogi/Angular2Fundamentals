import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class Authservice {

    currentUser: IUser;

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            firstName: 'Anuja',
            lastName: 'Saraogi',
            userName: userName,
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

}