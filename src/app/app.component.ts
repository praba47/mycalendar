import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  calendarOptions: Options;
  displayEvent: any;
 // @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(protected eventService: CalendarService) { }

  items = [];

  // loadTask() {
  //   this.eventService.getTaskDetails().subscribe(
  //     (data)=>{
  //       this.items = data;
  //       console.log(data);
  //     }
  //   );   
  // }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      console.log(data);
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },        
        events: data
      };
    });
  }

  clickButton(model: any) {
    this.displayEvent = model;
  }

  eventClick(model: any) {

    //this.displayEvent = model.title
    


    model = {
      event: {
        //id: model.event.id,
        //start: model.event.start,
        //end: model.event.end,
        title: model.event.title,
        start: model.event.start,
        end: model.event.end
        // other params
      }

      //duration: {}
    }

    this.displayEvent = model;
    console.log(model.event.title);
  }

  // updateEvent(model: any) {
  //   model = {
  //     event: {
  //       id: model.event.id,
  //       start: model.event.start,
  //       end: model.event.end,
  //       title: model.event.title
  //       // other params
  //     },
  //     duration: {
  //       _data: model.duration._data
  //     }
  //   }
  //   this.displayEvent = model;
  // }
}
