import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightFareConstant } from '../config/app.constant';
import { AppDataService } from './app.data.service';

@Injectable({
  providedIn: 'root'
})
export class SkyscannerService {

  constructor(private http: HttpClient,
    private appDataService:AppDataService) { }

  public CreateSession(originPlace: string, destinationPlace: string,outboundDate:string) {
    let data=this.appDataService.GenerateDataForCreateSession(originPlace,destinationPlace,outboundDate);
    return this.http.post(FlightFareConstant.create_session_api, data, {
      headers: {
        "x-rapidapi-host": FlightFareConstant.x_rapidapi_host,
        "x-rapidapi-key": FlightFareConstant.x_rapidapi_key,
        "content-type": "application/x-www-form-urlencoded"
      },
      observe:"response"
    });
  }

  public PollSessionResult(sessionKey:string){
    return this.http.get(`${FlightFareConstant.poll_session_api}${sessionKey}`,{
      headers: {
        "x-rapidapi-host": FlightFareConstant.x_rapidapi_host,
        "x-rapidapi-key": FlightFareConstant.x_rapidapi_key
      }
    });
  }
}
