import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authservice } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './user-profile.component.html',
  styles: [`
  em {font-size:10px; color:#f00; float:right}
  .error input {background-color: #E3C3C5}
  `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  constructor(private _auth: Authservice, private _router: Router) {

  }

  ngOnInit() {
    this.firstName = new FormControl(this._auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this._auth.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })

  }

  saveProfile() {
    this._auth.updateCurrentUser(this.profileForm.value.firstName, this.profileForm.value.lastName)
    this._router.navigate(['/events']);
  }


  cancel() {
    this._router.navigate(['/events']);
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

}