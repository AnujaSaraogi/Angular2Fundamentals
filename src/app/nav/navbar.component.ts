import { Component } from "../../../node_modules/@angular/core";
import { Authservice } from "../user/auth.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        li > a.active {color: #f97924;}
    `]

})
export class NavBarComponent {
    constructor(private _auth: Authservice) {

    }
}