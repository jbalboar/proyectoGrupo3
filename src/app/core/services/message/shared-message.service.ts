import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class SharedMessageService {
  private message: any = null;

  constructor(private messageService: MessageService) {}

  setMessage(severity: string, summary: string, detail: string) {
    this.message = { severity, summary, detail };
  }

  getMessage() {
    return this.message;
  }

  clearMessage() {
    this.message = null;
  }

  showMessage() {
    if (this.message) {
     this.messageService.add(this.message);
    }
  }
}
