import { Injectable } from '@angular/core';
import { FlightFareConstant } from '../config/app.constant';

/**
 * Application data service to re-use code
 */
@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor() { }

  /**
   * Generate data string to create session key
   * @param originPlace Origin place placeId
   * @param destinationPlace Destination place placeId
   * @param outboundDate Current Date
   */
  public GenerateDataForCreateSession(originPlace: string, destinationPlace: string,outboundDate:string) {
    let data = "inboundDate=&" +
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

    return data;
  }

  /**
   * Find minimum price from list of Iternary
   * @param itineraries Iternary list 
   */
  public FindMinimumPrice(itineraries: any) {
    let minPrice: any = {
      OutboundLegId: "",
      Price: 0
    };
    itineraries.forEach((iternary: any) => {
      if (iternary.PricingOptions.length > 1) {
        iternary.PricingOptions.forEach(priceOption =>{
          if (minPrice.Price > priceOption.Price || minPrice.Price==0) {
            minPrice = {
              OutboundLegId: iternary.OutboundLegId,
              Price: priceOption.Price
            }
          }
        })
      } else if (iternary.PricingOptions.length == 1) {
        if (minPrice.Price > iternary.PricingOptions[0].Price || minPrice.Price==0) {
          minPrice = {
            OutboundLegId: iternary.OutboundLegId,
            Price: iternary.PricingOptions[0].Price
          }
        }
      }
    });

    return minPrice;
  }


  /**
   * Find Leg's details based on Iternary Id
   * @param outBoundId Iternary outBoundId
   * @param legs List of Legs
   */
  public FindLegsDetails(outBoundId:string,legs:any){
    let legDetails=null;
    legs.forEach((leg:any) => {
      if(leg.Id==outBoundId){
        legDetails=leg;
      }
    });
    return legDetails;
  }

  /**
   * Find carrier's details based on carrier Id
   * @param carrierId Carrier Id
   * @param carriers List of carrier
   */
  public FindCarrier(carrierId:number,carriers:any[]){
    let carrierDetails={};
    carriers.forEach((carrier:any) =>{
      if(carrierId==carrier.Id){
        carrierDetails= carrier;
      }
    });
    return carrierDetails;
  }
}
