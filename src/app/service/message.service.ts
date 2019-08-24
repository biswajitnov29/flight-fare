import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { GlobalMessages } from 'src/app/config/globalMessages.model';
import { filter } from "rxjs/operators";
import { AppMessage } from 'src/app/model/app.message';


@Injectable()
export class MessageService {

    private subject = new Subject();

    public sendMessage(message: AppMessage) {
        this.subject.next(message);
    }

    public getMessage(messageType: GlobalMessages): Observable<any> {
        return this.subject.pipe(filter((msg: AppMessage) => msg.messageType === messageType));
    }
}