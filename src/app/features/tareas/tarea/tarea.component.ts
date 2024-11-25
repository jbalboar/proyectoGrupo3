import { Component, OnInit } from '@angular/core';
import { SharedMessageService } from '../../../core/services/message/shared-message.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent implements OnInit{
  constructor(private sharedMessageService: SharedMessageService) {}

  ngOnInit(): void {
    this.sharedMessageService.showMessage();
    this.sharedMessageService.clearMessage(); // Limpiar el mensaje después de mostrarlo
  }
}
