import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderViewComponent } from './component/calender-view/calender-view.component';
import { SearchViewComponent } from './component/search-view/search-view.component';
import { MessageService } from 'src/app/service/message.service';
import { LoaderViewComponent } from './component/loader-view/loader-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderViewComponent,
    SearchViewComponent,
    LoaderViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    AppRoutingModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
