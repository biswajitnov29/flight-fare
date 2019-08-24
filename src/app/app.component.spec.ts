import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { CalenderViewComponent } from 'src/app/component/calender-view/calender-view.component';
import { SearchViewComponent } from 'src/app/component/search-view/search-view.component';
import { MessageService } from 'src/app/service/message.service';
import { NotificationViewComponent } from './component/notification-view/notification-view.component';
import { LoaderViewComponent } from './component/loader-view/loader-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        FullCalendarModule
      ],
      declarations: [
        CalenderViewComponent,
        SearchViewComponent,
        LoaderViewComponent,
        NotificationViewComponent,
        AppComponent
      ],
      providers: [MessageService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render app-search-view', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-search-view')).toBeTruthy();
  });

  it('should render app-calender-view', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-calender-view')).toBeTruthy();
  });

});
