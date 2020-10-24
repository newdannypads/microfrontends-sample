import { Component, OnInit } from '@angular/core';
import { MicroFrontendShell } from '../mf-shell.parent';

@Component({
  selector: 'app-mf-wrapper2',
  templateUrl: './mf-wrapper2.component.html',
  styles: ['']
})
export class MfWrapper2Component extends MicroFrontendShell {
  elementUrl = 'http://127.0.0.1:8081/name-elements.js';

}
