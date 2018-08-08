import { Component, Input } from "@angular/core";

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleVisibility()" class="well">
        <h4>{{title}}</h4>
        <ng-content *ngIf="visible"></ng-content>
    </div>
    `

})
export class CollapsibleWellComponent {

    @Input() title: string;
    visible: boolean = true;


    toggleVisibility() {
        this.visible = !this.visible
    }

}