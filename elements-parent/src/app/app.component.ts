import { Component, EventEmitter } from '@angular/core';
import { EventBusService } from './event-bus.service';
import { Events, EmitEvent } from './register.events';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  constructor(public eventBusService: EventBusService, private _common: CommonService){
    this._common.subject.subscribe(resp => {
      console.log('app padree!!', resp);
      this.childData = resp;
    });
  }
  inputBox;
  childData: string;
  parentData:string =  'I am your father';

  
  // onChildDataSend(data: string){
  //   this.childData = data;
  // }

  onClick(event){
    this.eventBusService.emit(new EmitEvent(Events.onButtonClick, this.parentData));
  }
  onKeyUp(event){
    this._common.subjectInput.next(event);
  }
}
