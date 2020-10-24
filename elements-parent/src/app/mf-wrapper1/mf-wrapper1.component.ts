import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MicroFrontendShell } from '../mf-shell.parent';

@Component({
  selector: 'app-mf-wrapper1',
  templateUrl: './mf-wrapper1.component.html',
  styles: ['']
})
export class MfWrapper1Component extends MicroFrontendShell {

  elementUrl = "http://127.0.0.1:8080/name-elements.js"
  @Input() dataFromParent;
  @Output() childDataSend = new EventEmitter<String>();
  childData: string;
  onButtonClick(event: any){
    this.childDataSend.emit(event.detail);
  }

}
