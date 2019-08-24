import { GlobalMessages } from 'src/app/config/globalMessages.model';

export class AppMessage {
    messageType: GlobalMessages;
    messagePayload: any;

    constructor(_messageType: GlobalMessages, _payload: any) {
        this.messageType = _messageType;
        this.messagePayload = _payload;
    }
}