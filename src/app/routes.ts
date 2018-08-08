import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { Routes } from "@angular/router";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/error404.component";
import { EventRouteActivator } from "./event-details/event-route-activator.service";
import { EventListResolver } from "./events/events-list-resolver.service";
import { CreateSessionComponent } from "./event-details/create-session.component";

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateEventFunction'] },
    { path: 'events/new/session', component: CreateSessionComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
]