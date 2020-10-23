import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [], // this is key
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap { 
  constructor(injector: Injector) {
    // Convert `PopupComponent` to a custom element.
    const el = createCustomElement(AppComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('name-element', el);
  }

  ngDoBootstrap() {}
}
