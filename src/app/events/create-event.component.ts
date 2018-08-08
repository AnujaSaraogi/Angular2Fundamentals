import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IEvent, EventService } from "./shared";

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em {font-size:10px; color:#f00; float:right}
    .error input {background-color: #E3C3C5}
    `]
})
export class CreateEventComponent {
    isDirty: boolean = true;
    newEvent: IEvent;

    constructor(private _router: Router, private _eventService: EventService) {

    }

    cancel() {
        this._router.navigate(['/events']);
    }

    saveEvent(formValues) {
        this._eventService.saveEvent(formValues);
        this.isDirty = false;
        this._router.navigate(['/events']);
    }
}