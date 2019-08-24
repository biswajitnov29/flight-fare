import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Place } from 'src/app/model/Place';
import { FlightFareConstant } from 'src/app/config/app.constant';
import { SkyscannerService } from 'src/app/service/skyscanner.service';
import { AppDataService } from 'src/app/service/app.data.service';
import { MessageService } from 'src/app/service/message.service';
import { GlobalMessages } from 'src/app/config/globalMessages.model';
import { AppMessage } from 'src/app/model/app.message';
import { map, mergeMap, catchError, concatMap, retry } from 'rxjs/operators';
import { Observable, forkJoin, of, throwError } from 'rxjs';
import { NotificationType } from 'src/app/config/notificationtype';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-calender-view',
  templateUrl: './calender-view.component.html',
  styleUrls: ['./calender-view.component.less']
})
export class CalenderViewComponent implements OnInit {

  
  calendarPlugins = [dayGridPlugin];
  flightList: any[] = [];
  /**
   * Origin place 
   */
  originPlace: Place;
  /**
   * Destination place
   */
  destinationPlace: Place;

  constructor(
    private messageService: MessageService,
    private skyscannerService: SkyscannerService,
    private appDataService: AppDataService) { }

  ngOnInit(): void {
    this.messageService.getMessage(GlobalMessages.updatePlace).subscribe((data: AppMessage) => {
      if (data.messagePayload) {
        this.originPlace = FlightFareConstant.placeList.filter(i => i.placeId == data.messagePayload.originPlaceId)[0];
        this.destinationPlace = FlightFareConstant.placeList.filter(i => i.placeId == data.messagePayload.destinationPlaceId)[0];
        this.SearchFlightFares();
      }
    })
  }

  /**
   * Search flight fare for respective To and From for next 30 days
   */
  SearchFlightFares() {
    if (this.originPlace.placeId != this.destinationPlace.placeId) {
      let currDate = moment(new Date()).startOf("days");
      let endDate = currDate.clone().add(1, "month").startOf("days");
      this.messageService.sendMessage(new AppMessage(GlobalMessages.displayPageLoader, {}));
      let observableList: Observable<any>[] = [];
      this.flightList = [];

      while (currDate.diff(endDate) < 0) {
        observableList.push(this.FetchFlightDetails(currDate.clone()));
        currDate.add(1, 'days');
      }

      forkJoin(observableList).subscribe((dataList: any[]) => {
        if (dataList && dataList.length > 0) {
          dataList.forEach((data: any) => {
            this.FormatData(data, moment(data.Query.OutboundDate));
          });
        }
        this.messageService.sendMessage(new AppMessage(GlobalMessages.hidePageLoader, {}));
      }, (error: HttpErrorResponse) => {
        this.messageService.sendMessage(new AppMessage(GlobalMessages.hidePageLoader, {}));
        if (error.status == 901) {
          this.messageService.sendMessage(new AppMessage(GlobalMessages.showNotification, {
            messageType: NotificationType.Error,
            message: error.error
          }));
        } else if(error.status == 429){
          if(error.error.ValidationErrors.length>0){
            this.messageService.sendMessage(new AppMessage(GlobalMessages.showNotification, {
              messageType: NotificationType.Error,
              message: error.error.ValidationErrors[0]
            }));
          }
        }else {
          this.messageService.sendMessage(new AppMessage(GlobalMessages.showNotification, {
            messageType: NotificationType.Error,
            message: error.message
          }));
        }

      });
    }
  }

  /**
   * Fetch flight details based on date
   * @param date Find flight details on that date
   */
  public FetchFlightDetails(date: moment.Moment) {
    return this.skyscannerService.CreateSession(this.originPlace.placeId, this.destinationPlace.placeId, date.format(FlightFareConstant.dateFormat))
      .pipe(
        map(resp => {
          if (resp) {
            let location = resp.headers.get("Location");
            let locationSplit = location.split("/");
            let sessionKey = locationSplit.length > 0 ? locationSplit[locationSplit.length - 1] : null;
            return sessionKey;
          }
        }),
        mergeMap(sessionKey => this.skyscannerService.PollSessionResult(sessionKey)),
        concatMap((response: any) => response.Status === "UpdatesComplete" ?
          of(response) :
          throwError(new HttpErrorResponse({
            status: 901,
            error: "Data update incomplete"
          }))),
        map(response => response),
        retry(FlightFareConstant.failedServiceNoOfRetry),
        catchError(error => {
          return throwError(error);
        })
      )
  }

  /**
   * Format poll result based on current date
   * @param data Poll result data
   * @param date Current date
   */
  public FormatData(data: any, date: moment.Moment) {
    let minPrice = this.appDataService.FindMinimumPrice(data.Itineraries);
    let legsDetails = this.appDataService.FindLegsDetails(minPrice.OutboundLegId, data.Legs);
    let title = "";
    if (legsDetails) {
      let depertureTime = moment(legsDetails.Departure).format("hh:mm:ss a");
      let carrier: any = this.appDataService.FindCarrier(legsDetails.Carriers[0], data.Carriers);
      title = `${carrier.Name} \n Deperture: ${depertureTime} \n Price: ${minPrice.Price} ${FlightFareConstant.default_data.currency}`;
    } else {
      title = `Price: ${minPrice.Price} ${FlightFareConstant.default_data.currency}`;
    }
    this.flightList.push({
      title: title,
      date: date.format(FlightFareConstant.dateFormat)
    });
  }

}
