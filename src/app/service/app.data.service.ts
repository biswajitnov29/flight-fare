import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { FlightFareConstant } from '../config/app.constant';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor() { }

  public GenerateDataForCreateSession(originPlace: string, destinationPlace: string) {
    let data = "inboundDate=&"+
    "cabinClass="+FlightFareConstant.default_data.cabinClass+
    "&children="+FlightFareConstant.default_data.children+
    "&infants="+FlightFareConstant.default_data.infants+
    "&country="+FlightFareConstant.default_data.country+
    "&currency="+FlightFareConstant.default_data.currency+
    "&locale="+FlightFareConstant.default_data.locale+
    "&originPlace="+originPlace+
    "&destinationPlace="+destinationPlace+
    "&outboundDate="+moment(new Date()).format("YYYY-MM-DD")+
    "&adults="+FlightFareConstant.default_data.adults;

    return data;
  }
}
