import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  @Input() FatherValue:string = 'test1';
  @Output() SonValue: EventEmitter<string> = new EventEmitter();
  
  constructor(private _common: CommonService) { }
  
  ngOnInit(): void {
  }

  clickToParent( ) {
    debugger;
    this._common.subject.next('Im your child test 1');
  }
}
