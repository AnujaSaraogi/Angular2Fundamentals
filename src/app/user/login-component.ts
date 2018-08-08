import { Component } from "@angular/core";
import { Authservice } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './login.component.html',
    styles: [`
    em {font-size:10px; color:#f00; float:right}
    `]
})
export class LoginComponent {

    userName;
    password;
    mouseLogin;

    constructor(private _auth: Authservice, private _router: Router) {

    }

    submit(loginForm) {
        this._auth.loginUser(loginForm.userName, loginForm.password);
        this._router.navigate(['/events']);
    }

    cancel() {
        this._router.navigate(['/events']);
    }
}