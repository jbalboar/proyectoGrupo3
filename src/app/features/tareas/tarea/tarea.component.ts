import { Component, OnInit } from '@angular/core';
import { SharedMessageService } from '../../../core/services/message/shared-message.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent implements OnInit{
  constructor(private sharedMessageService: SharedMessageService) {}

  ngOnInit(): void {
    console.log("pruebas")
    this.sharedMessageService.showMessage();
    this.sharedMessageService.clearMessage(); // Limpiar el mensaje después de mostrarlo
  }
}
