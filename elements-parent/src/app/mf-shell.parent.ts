import {EventBusService} from './event-bus.service';
import { Events, EmitEvent } from './register.events';
import { OnInit, Input, Component } from '@angular/core';

@Component({
    template: ''
})
export class MicroFrontendShell implements OnInit {
    @Input() dataFromParentViaEvent;
    constructor(public eventBusService: EventBusService) {}

    ngOnInit(){
        this.eventBusService.on(Events.onButtonClick, (data) => {
            this.dataFromParentViaEvent = data;
        })
    }
}