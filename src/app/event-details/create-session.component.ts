import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ISession } from "../events/shared";


@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
    em {font-size:10px; color:#f00; float:right}
    .error input select textarea {background-color: #E3C3C5}
    `]
})
export class CreateSessionComponent implements OnInit {

    @Output() saveNewSession = new EventEmitter();
    @Output() onCancelAddSession = new EventEmitter();

    sessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl

    constructor(private _router: Router) {

    }
    ngOnInit() {

        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'bar'])]);

        this.sessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            level: this.level,
            duration: this.duration,
            abstract: this.abstract
        })

    }

    private restrictedWords(words: string[]) {

        return (control: FormControl): { [key: string]: string } => {

            if (!words) return null;

            else {
                var invalidWords = words.map(w => control.value.includes(w) ? w : null)
                    .filter(w => w != null);

                return invalidWords.length > 0 ? { 'restrictedWords': invalidWords.join(',') } : null;
            }
        }
    }

    saveSession() {
        let session: ISession = {
            id: null,
            name: this.name.value,
            presenter: this.presenter.value,
            duration: +this.duration.value,
            level: this.level.value,
            abstract: this.abstract.value,
            voters: []
        }

        this.saveNewSession.emit(session);

    }

    cancel() {
        this.onCancelAddSession.emit();
    }

}