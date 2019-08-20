import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { SkyscannerService } from './service/skyscanner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  
  title = 'Flight fare';

  calendarPlugins = [dayGridPlugin];
  flightList:any[]=[
    { title: 'Independence day', date: '2019-08-15' },
    { title: 'event 2', date: '2019-08-02' }
  ];

  constructor(private skyscannerService:SkyscannerService){

  }

  ngOnInit(): void {
    this.skyscannerService.CreateSession("SINS-sky","KULM-sky")
    .subscribe(resp =>{
      if(resp){
        let location=resp.headers.get("Location");
        let locationSplit=location.split("/");
        let sessionKey=locationSplit.length>0?locationSplit[locationSplit.length-1]:null;
        console.log("Session Key: "+sessionKey);
        this.skyscannerService.PollSessionResult(sessionKey)
        .subscribe((data:any) => {
          console.log(data);
          let minPrice:any={};
          data.Itineraries.forEach((iternary:any) => {
            if(iternary.PricingOptions.length>1){

            }else if(iternary.PricingOptions.length == 1){
              if(minPrice.Price > iternary.PricingOptions[0].Price){
                minPrice={
                  OutboundLegId:iternary.OutboundLegId,
                  Price:iternary.PricingOptions[0].Price
                }
              }
            }
          });

        })
      }
    })
  }
}
