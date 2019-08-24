import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderViewComponent } from './calender-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MessageService } from 'src/app/service/message.service';

describe('CalenderViewComponent', () => {
  let component: CalenderViewComponent;
  let fixture: ComponentFixture<CalenderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,FullCalendarModule],
      declarations: [ CalenderViewComponent ],
      providers: [MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render calender', () => {
    const fixture = TestBed.createComponent(CalenderViewComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('full-calendar')).toBeTruthy();
  });
});
