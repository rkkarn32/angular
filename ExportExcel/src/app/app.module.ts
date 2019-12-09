import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ExportDirective } from './directive/export.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ExportDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
