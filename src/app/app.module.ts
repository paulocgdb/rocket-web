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
import {MatNativeDateModule, MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';
import {CustomDateAdapter} from "./utils/date-utils";

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
    MatNativeDateModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {provide: DateAdapter, useClass: CustomDateAdapter},
    {provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {dateInput: 'DD/MM/YYYY'},
        display: {dateInput: 'input', monthYearLabel: 'MMM YYYY', dateA11yLabel: 'LL', monthYearA11yLabel: 'MMMM YYYY'}
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
