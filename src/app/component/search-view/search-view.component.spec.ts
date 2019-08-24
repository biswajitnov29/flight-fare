import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchViewComponent } from './search-view.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'src/app/service/message.service';

describe('SearchViewComponent', () => {
  let component: SearchViewComponent;
  let fixture: ComponentFixture<SearchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ SearchViewComponent ],
      providers:[MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have default value of originPlace is 'KULM-sky'`, () => {
    const fixture = TestBed.createComponent(SearchViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.originPlaceId).toEqual('KULM-sky');
  });

  it(`should have default value of destinationPlace is 'SINS-sky'`, () => {
    const fixture = TestBed.createComponent(SearchViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.destinationPlaceId).toEqual('SINS-sky');
  });

  it(`should contain list of placeList `, () => {
    const fixture = TestBed.createComponent(SearchViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.placeList.length).toBeGreaterThan(0);
  });
});
