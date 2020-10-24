import { Component, EventEmitter } from '@angular/core';
import { EventBusService } from './event-bus.service';
import { Events, EmitEvent } from './register.events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public eventBusService: EventBusService){}
  inputBox;
  childData: string;
  parentData:string =  'I am your father';
  onChildDataSend(data: string){
    this.childData = data;
  }

  onClick(){
    this.eventBusService.emit(new EmitEvent(Events.onButtonClick, this.parentData));
  }
}
