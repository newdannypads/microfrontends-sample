import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
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
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule { 
  constructor(injector: Injector) {
    // Convert `PopupComponent` to a custom element.
    const el = createCustomElement(AppComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('name-element2', el);
  }

  ngDoBootstrap() {}
}
