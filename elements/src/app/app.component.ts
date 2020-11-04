import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elements';
  @Input() name: string = 'internal';
  @Input() dataFromParentViaEvent: string;
  @Output() buttonClick = new EventEmitter<string>();
  @Output() test1Event = new EventEmitter<string>();

  constructor(private router: Router, private _common: CommonService) {}

  ngOnInit(): void {
    this.router.navigateByUrl('/test1');
    this._common.subject.subscribe(resp => {
      console.log('app component', resp);
      this.test1Event.emit(resp);
    });
  }

  onClick() {
    this.buttonClick.emit('Hi, I am your child App Component');
  }
}
