import { Component, OnInit } from "../../../node_modules/@angular/core";
import { EventService } from "./shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared";

declare let toastr: any;

@Component({
    template: `
   <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
    <div *ngFor="let event of events"  class="col-md-5">
   <event-thumbnail (click)="handleToastrEvent(event.name)" [event]="event"></event-thumbnail>
   </div>
   </div>
</div>
   `
})
export class EventsListComponent implements OnInit {
    events: IEvent[];
    constructor(private eventService: EventService, private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this._route.snapshot.data['events'];
        console.log(this.events);
    }

    handleToastrEvent(eventName) {
        //  toastr.success(eventName);
    }

}