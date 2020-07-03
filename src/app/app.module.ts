import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApptunixComponent } from './apptunix-component/apptunix.component'
import { DragDropDirective } from './shared/directives/drag-drop.directives';
@NgModule({
  declarations: [
    AppComponent,
    ApptunixComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
