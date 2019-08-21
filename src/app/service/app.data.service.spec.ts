import { TestBed } from '@angular/core/testing';

import { AppDataService } from './app.data.service';
import { FlightFareConstant } from 'src/app/config/app.constant';

describe('App.DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppDataService = TestBed.get(AppDataService);
    expect(service).toBeTruthy();
  });

  it('should be generate data for create session', () => {
    const service: AppDataService = TestBed.get(AppDataService);
    const originPlace="KUL";
    const destinationPlace="SIN";
    const outboundDate="2019-08-21";
    const mockData="inboundDate=&" +
    "cabinClass=" + FlightFareConstant.default_data.cabinClass +
    "&children=" + FlightFareConstant.default_data.children +
    "&infants=" + FlightFareConstant.default_data.infants +
    "&country=" + FlightFareConstant.default_data.country +
    "&currency=" + FlightFareConstant.default_data.currency +
    "&locale=" + FlightFareConstant.default_data.locale +
    "&originPlace=" + originPlace +
    "&destinationPlace=" + destinationPlace +
    "&outboundDate=" + outboundDate +
    "&adults=" + FlightFareConstant.default_data.adults;
    expect(service.GenerateDataForCreateSession(originPlace,destinationPlace,outboundDate)).toEqual(mockData);
  });
});
