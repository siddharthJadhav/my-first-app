import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarnningAlertComponent } from './components/warnning-alert/warnning-alert.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { BasicDirective } from './directive/basic-directive/basic-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    WarnningAlertComponent,
    SuccessAlertComponent,
    BasicDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
