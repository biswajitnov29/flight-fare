import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppComponent } from './app.component';
import { CalenderViewComponent } from './component/calender-view/calender-view.component';
import { SearchViewComponent } from './component/search-view/search-view.component';
import { MessageService } from 'src/app/service/message.service';
import { LoaderViewComponent } from './component/loader-view/loader-view.component';
import { NotificationViewComponent } from './component/notification-view/notification-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderViewComponent,
    SearchViewComponent,
    LoaderViewComponent,
    NotificationViewComponent
  ],
  imports: [
    BrowserAnimationsModule ,
    FormsModule,
    HttpClientModule,
    FullCalendarModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
