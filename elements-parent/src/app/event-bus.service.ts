import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Events, EmitEvent } from './register.events'

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private subject$ = new Subject<any>();

  on(event: Events, action: any): Subscription {
    debugger;
       return this.subject$
        .pipe(
              filter((e: EmitEvent) => {
                return e.name === event;
              }),
              map((e: EmitEvent) => {
                return e.value;
              })
            )
              .subscribe(action);
  }

  emit(event: EmitEvent) {
      this.subject$.next(event);
  }
}
