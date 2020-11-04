import { Component, Input, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus.service';
import { MicroFrontendShell } from '../mf-shell.parent';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-mf-wrapper2',
  templateUrl: './mf-wrapper2.component.html',
  styles: ['']
})
export class MfWrapper2Component extends MicroFrontendShell {
  elementUrl = 'http://127.0.0.1:8081/name-elements.js';

  @Input() dataFromParentViaEvent;

  constructor(public eventBusService: EventBusService, private _common: CommonService) {
    super(eventBusService );
    this._common.subjectInput.subscribe(resp => {
      console.log(resp.target.value);
      this.dataFromParentViaEvent = resp.target.value;
    });
  }
}
