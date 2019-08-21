import { Component, AfterViewInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { SkyscannerService } from './service/skyscanner.service';
import { AppDataService } from './service/app.data.service';
import * as moment from 'moment';
import { FlightFareConstant } from './config/app.constant';
import { Place } from './model/Place';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

  calendarPlugins = [dayGridPlugin];
  flightList: any[] = [];
  originPlace: Place = FlightFareConstant.placeList.filter(i => i.placeId == "KULM-sky")[0];
  destinationPlace: Place = FlightFareConstant.placeList.filter(i => i.placeId == "SINS-sky")[0];

  placeList: Place[] = FlightFareConstant.placeList;
  constructor(
    private skyscannerService: SkyscannerService,
    private appDataService: AppDataService) {

  }

  ngAfterViewInit(): void {
    this.SearchFlightFares();
  }

  public FetchFlightDetails(date: moment.Moment) {
    this.skyscannerService.CreateSession(this.originPlace.placeId, this.destinationPlace.placeId, date.format(FlightFareConstant.dateFormat))
      .subscribe(resp => {
        if (resp) {
          let location = resp.headers.get("Location");
          let locationSplit = location.split("/");
          let sessionKey = locationSplit.length > 0 ? locationSplit[locationSplit.length - 1] : null;
          this.skyscannerService.PollSessionResult(sessionKey)
            .subscribe((data: any) => {
              this.FormatData(data, date);
            })
        }
      });
  }

  public FormatData(data: any, date: moment.Moment) {
    let minPrice = this.appDataService.FindMinimumPrice(data.Itineraries);
    let legsDetails = this.appDataService.FindLegsDetails(minPrice.OutboundLegId, data.Legs);
    let title = "";
    if (legsDetails) {
      let depertureTime = moment(legsDetails.Departure).format("hh:mm:ss a");
      let carrier: any = this.appDataService.FindCarrier(legsDetails.Carriers[0], data.Carriers);
      title = `${carrier.Name} \n Deperture Time: ${depertureTime} \n Price: ${minPrice.Price} ${FlightFareConstant.default_data.currency}`;
    } else {
      title = `Price: ${minPrice.Price} ${FlightFareConstant.default_data.currency}`;
    }
    this.flightList.push({
      title: title,
      date: date.format(FlightFareConstant.dateFormat)
    });
  }

  UpdateToPlace(placeId: string) {
    this.destinationPlace = FlightFareConstant.placeList.filter(i => i.placeId == placeId)[0];
  }

  UpdateFromPlace(placeId: string) {
    this.originPlace = FlightFareConstant.placeList.filter(i => i.placeId == placeId)[0];
  }

  SearchFlightFares() {
    if (this.originPlace.placeId != this.destinationPlace.placeId) {
      this.flightList = [];
      let currDate = moment(new Date()).startOf("days");
      let endDate = currDate.clone().add(FlightFareConstant.noOfDaysToFetchData, "days").startOf("days");
      while (currDate.add(1, 'days').diff(endDate) < 0) {
        this.FetchFlightDetails(currDate.clone());
      }
    }
  }

}
