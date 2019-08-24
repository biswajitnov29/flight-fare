import { Component, AfterViewInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FlightFareConstant } from './config/app.constant';
import { Place } from './model/Place';

/**
 * App Component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

  title:string="Welcome to flight-fare!";
  /**
   * Calender day grid plugin
   */
  calendarPlugins = [dayGridPlugin];
  
  constructor() {

  }

  ngAfterViewInit(): void {
  }

  

}