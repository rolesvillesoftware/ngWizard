import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgWizardModule } from './ng-wizard/ng-wizard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
