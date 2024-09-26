import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormioModule } from '@formio/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Formio } from 'formiojs';
import uswds from '@formio/uswds';

Formio.use(uswds);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
