import { Place } from '../model/Place';

class FlightFareDefaultData {
    cabinClass: string
    children: number
    infants: number
    country: string
    currency: string
    locale: string
    adults: number
}
export class FlightFareConstant {
    static x_rapidapi_host: string = "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com";
    static x_rapidapi_key: string = "083e810456mshf677a3e0aa3cc04p19a89ejsndc6187216413";
    static create_session_api: string = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0";
    static poll_session_api = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/";

    static default_data: FlightFareDefaultData = {
        cabinClass: "business",
        children: 1,
        infants: 1,
        country: "US",
        currency: "USD",
        locale: "en-US",
        adults: 1
    };

    static dateFormat: string = "YYYY-MM-DD";
    static noOfDaysToFetchData: number = 20;

    static placeList: Place[] = [
        {
            placeId: "KULM-sky",
            placeName: "Kuala Lumpur",
            countryId: "MY-sky",
            regionId: "",
            cityId: "KULM-sky",
            countryName: "Malaysia"
        },
        {
            placeId: "SINS-sky",
            placeName: "Singapore",
            countryId: "SG-sky",
            regionId: "",
            cityId: "SINS-sky",
            countryName: "Singapore",
        },
        {
            placeId: "SFO-sky",
            placeName: "San Francisco International",
            countryId: "US-sky",
            regionId: "CA",
            cityId: "SFOA-sky",
            countryName: "United States",
        }
    ];
}

