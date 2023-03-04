import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from "./auth/auth.module";
import {PagesModule} from "./pages/pages.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {CustomDateAdapter} from "./utils/date-utils";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    PagesModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,
    MatMenuModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {provide: DateAdapter, useClass: CustomDateAdapter},
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {dateInput: 'dd/mm/yyyy'},
        display: {dateInput: 'input', monthYearLabel: 'mmm yyyy', dateA11yLabel: 'll', monthYearA11yLabel: 'mmmm yyyy'}
      }
    },
    {provide: MAT_DATE_LOCALE, useValue: 'pt'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localePt);
  }
}
