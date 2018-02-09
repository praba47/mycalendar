import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { SurbtcMarket } from './surbtcmarket';
import { FullCalendarModule } from 'ng-fullcalendar';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';
import { CalendarService } from './calendar.service';
@NgModule({
  imports: [ BrowserModule, FormsModule, FullCalendarModule, HttpClientModule, HttpModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ CalendarService ]
})
export class AppModule { }
