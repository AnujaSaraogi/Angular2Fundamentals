import { Component, OnInit } from "@angular/core";
import { EventService } from "../events/shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent, ISession } from "../events/shared";

@Component({
    templateUrl: './event-details.component.html',
    styles: [
        `
        .container {padding-left:20px; padding-right:20px;}
        .event-image {height:100px;}
        a {cursor:pointer;}
        `
    ]
})
export class EventDetailsComponent implements OnInit {

    event: IEvent;
    addMode: boolean = false;
    constructor(private _eventService: EventService, private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this.event = this._eventService.getEvent(+this._route.snapshot.params['id']);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        session.id = Math.max.apply(null, this.event.sessions.map(c => c.id)) + 1;
        this.event.sessions.push(session);
        this._eventService.updateEvent(event);
        this.addMode = false;
    }

    onCancelAddSession() {
        this.addMode = false;
    }
}