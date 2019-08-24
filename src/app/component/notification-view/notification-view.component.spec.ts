import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationViewComponent } from './notification-view.component';
import { MessageService } from 'src/app/service/message.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NotificationViewComponent', () => {
  let component: NotificationViewComponent;
  let fixture: ComponentFixture<NotificationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[BrowserAnimationsModule],
      declarations: [ NotificationViewComponent ],
      providers:[MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
