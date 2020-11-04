import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LazyElementsModule } from '@angular-extensions/elements';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MfWrapper1Component } from './mf-wrapper1/mf-wrapper1.component';
import { MfWrapper2Component } from './mf-wrapper2/mf-wrapper2.component';
import {EventBusService} from './event-bus.service';
import { MicroFrontendShell} from './mf-shell.parent';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    MfWrapper1Component,
    MfWrapper2Component
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyElementsModule,
    FormsModule
  ],
  providers: [EventBusService, MicroFrontendShell],
  bootstrap: [AppComponent]
})
export class AppModule { }
