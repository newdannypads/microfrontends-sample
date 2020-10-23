import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elements';
  @Input() name: string = 'internal';
  @Output() buttonClick = new EventEmitter<string>();

  onClick() {
      this.buttonClick.emit('Hi, I am your child');
  }
}
