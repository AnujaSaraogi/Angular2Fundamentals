import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/error404.component';
import { EventRouteActivator } from './event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { Authservice } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './event-details/create-session.component';
import { SessionListComponent } from './event-details/session-list.component';
import { CollapsibleWellComponent } from './events/shared/collapsible-well.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventService,
    ToastrService,
    EventRouteActivator,
    Authservice,
    EventListResolver,
    {
      provide: 'canDeactivateEventFunction',
      useValue: CanDeactivateEvent
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {


}

export function CanDeactivateEvent(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('Are you sure you want to cancel?');
  }

  return true;
}
