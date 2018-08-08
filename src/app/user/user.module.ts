import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { ProfileComponent } from "./user-profile.component";
import { userRoutes } from "./user-routes";
import { LoginComponent } from "./login-component";

@NgModule({

    imports: [CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    providers: [],
    declarations: [ProfileComponent, LoginComponent]

})
export class UserModule {

}