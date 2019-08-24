import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
import { GlobalMessages } from 'src/app/config/globalMessages.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loader-view',
  templateUrl: './loader-view.component.html',
  styleUrls: ['./loader-view.component.less']
})
export class LoaderViewComponent implements AfterViewInit {

  displayLoader:boolean=false;
  constructor(private messageService:MessageService,private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.messageService.getMessage(GlobalMessages.displayPageLoader).subscribe(_=>{
      this.displayLoader=true;
      this.cdr.detectChanges();
    });
    this.messageService.getMessage(GlobalMessages.hidePageLoader).subscribe(_=>{
      this.displayLoader=false;
      this.cdr.detectChanges();
    });
  }

}
