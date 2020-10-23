import {EventBusService} from './event-bus.service';
import { Events, EmitEvent } from './register.events';
import { OnInit, Input } from '@angular/core';
class MicroFrontendSell implements OnInit {
    @Input() eventDataFromParent;
    constructor(public eventBusService: EventBusService) {}

    ngOnInit(){
        this.eventBusService.on(Events.onButtonClick, (data) => {
            this.eventDataFromParent = data;
        })
    }
}