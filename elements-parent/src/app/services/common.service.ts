import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public subject = new Subject<any>();
  public subjectInput = new Subject<any>();
  
  constructor() { }
}
