import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
import { GlobalMessages } from 'src/app/config/globalMessages.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { timer } from 'rxjs';

@Component({
  selector: 'app-notification-view',
  templateUrl: './notification-view.component.html',
  styleUrls: ['./notification-view.component.less'],
  animations: [
    trigger('changeVisibility', [
      state('hide', style({
        top: '-30px',
        visibility: 'hidden'
      })),
      state('show', style({
        top: '30px',
        visibility: 'visible'
      })),
      transition('hide=>show', animate('1500ms')),
      transition('show=>hide', animate('1000ms'))
    ]),
  ]
})
export class NotificationViewComponent implements OnInit {

  currentState = 'hide';
  showNoti:boolean=false;
  notification:any={};
  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.messageService.getMessage(GlobalMessages.showNotification)
    .subscribe((data:any) => {
      this.notification=data.messagePayload;
      this.changeState();
      timer(10000).subscribe(_ => this.changeState());
    })
  }

  changeState() {
    this.currentState = this.currentState === 'hide' ? 'show' : 'hide';
  }

}
