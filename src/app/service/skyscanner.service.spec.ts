import { TestBed, inject } from '@angular/core/testing';
import * as moment from 'moment';
import { SkyscannerService } from './skyscanner.service';
import { HttpClientModule, HttpEvent, HttpEventType } from '@angular/common/http';
import { FlightFareConstant } from '../config/app.constant';
import { browser } from 'protractor';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('SkyscannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SkyscannerService]
  }));

  it('should be created', () => {
    const service: SkyscannerService = TestBed.get(SkyscannerService);
    expect(service).toBeTruthy();
  });

  it(`should get session key from 'Create Session' `,
    inject(
      [HttpTestingController, SkyscannerService],
      (httpMock: HttpTestingController, skyscannerService: SkyscannerService) => {
        const date = moment(new Date()).format(FlightFareConstant.dateFormat);
        skyscannerService.CreateSession("KULM-sky", "SINS-sky", date).subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.headers.get("Location")).toBeTruthy();
          }
        });

        const mockReq = httpMock.expectOne(FlightFareConstant.create_session_api);
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        httpMock.verify();
      }
    )
  );

  it(`should get result from 'Poll Result' `,
    inject(
      [HttpTestingController, SkyscannerService],
      (httpMock: HttpTestingController, skyscannerService: SkyscannerService) => {
        const date = moment(new Date()).format(FlightFareConstant.dateFormat);
        skyscannerService.PollSessionResult("session-sky").subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toBeTruthy();
          }
        });
        const mockReq = httpMock.expectOne(FlightFareConstant.poll_session_api+"session-sky");
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        httpMock.verify();
      }
    )
  );

});
