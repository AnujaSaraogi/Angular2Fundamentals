import { Injectable } from "@angular/core";
import { EventService } from "../events/shared/event.service";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private _eventService: EventService,
        private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {

        const eventExists = !!this._eventService.getEvent(+route.params['id']);

        if (!eventExists) {
            this._router.navigate(['/404']);
        }

        return eventExists;
    }

}