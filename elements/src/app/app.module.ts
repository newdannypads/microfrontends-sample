import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //bootstrap: [], // this is key
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap { 
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    // Convert `PopupComponent` to a custom element.
    const el = createCustomElement(AppComponent, { injector: this.injector });
    // Register the custom element with the browser.
    customElements.define('name-element', el);

  }
  
}
