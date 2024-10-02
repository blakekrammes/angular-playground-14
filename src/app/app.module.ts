import { AppConfig } from './config';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormioAppConfig } from '@formio/angular';
import { FormioModule } from '@formio/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Formio } from 'formiojs';  
import uswds from '@formio/uswds';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormioModule,
  ],
  providers: [{ provide: FormioAppConfig, useValue: AppConfig }],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    Formio.use(uswds);
  }
}
