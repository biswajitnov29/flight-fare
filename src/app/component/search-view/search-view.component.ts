import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { FlightFareConstant } from 'src/app/config/app.constant';
import { Place } from 'src/app/model/Place';
import { MessageService } from 'src/app/service/message.service';
import { AppMessage } from '../../model/app.message';
import { GlobalMessages } from 'src/app/config/globalMessages.model';

/**
 * Application flight search section
 */
@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.less']
})
export class SearchViewComponent implements OnInit,AfterViewInit {
  /**
   * Default Origin place 
   */
  originPlaceId: string = FlightFareConstant.defaultSourcePlaceId;
  /**
   * Default Destination place
   */
  destinationPlaceId: string = FlightFareConstant.defaultDestinationPlaceId;
  /**
   * Origin place 
   */
  originPlace: Place;
  /**
   * Destination place
   */
  destinationPlace: Place;
  /**
   * Place list to search flight details
   */
  placeList: Place[] = FlightFareConstant.placeList;
  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
    this.originPlace = FlightFareConstant.placeList.filter(i => i.placeId == this.originPlaceId)[0];
    this.destinationPlace = FlightFareConstant.placeList.filter(i => i.placeId == this.destinationPlaceId)[0];
  }
  ngAfterViewInit(): void {
    this.messageService.sendMessage(new AppMessage(GlobalMessages.updatePlace,{
      originPlaceId:this.originPlaceId,
      destinationPlaceId:this.destinationPlaceId
    }));
  }

  /**
   * Update To place
   * @param placeId To place value 
   */
  UpdateToPlace(placeId: string) {
    this.destinationPlaceId = placeId;
  }

  /**
   * Update From place
   * @param placeId From place value
   */
  UpdateFromPlace(placeId: string) {
    this.originPlaceId = placeId;
  }

  SearchFlightFares(){
    this.messageService.sendMessage(new AppMessage(GlobalMessages.updatePlace,{
      originPlaceId:this.originPlaceId,
      destinationPlaceId:this.destinationPlaceId
    }));
  }

}
