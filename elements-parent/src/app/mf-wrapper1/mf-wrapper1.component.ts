import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventBusService } from '../event-bus.service';
import { MicroFrontendShell } from '../mf-shell.parent';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-mf-wrapper1',
  templateUrl: './mf-wrapper1.component.html',
  styles: ['']
})
export class MfWrapper1Component extends MicroFrontendShell {

  elementUrl = "http://127.0.0.1:8080/name-elements.js"
  @Input() dataFromParent;
  childData: string;
  
  constructor(public eventBusService: EventBusService, private _common: CommonService) {
    super(eventBusService );
    this._common.subjectInput.subscribe(resp => {
      console.log(resp.target.value);
      this.dataFromParent = resp.target.value;
    });
  }
  onButtonClick(event: any){
    //this.childDataSend.emit(event.detail);
    this._common.subject.next(event.detail);
  }

  onTest1Event(event: any){
    console.log(event.detail);
    this._common.subject.next(event.detail);
  }

}
