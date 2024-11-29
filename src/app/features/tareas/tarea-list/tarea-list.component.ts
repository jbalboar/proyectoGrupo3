import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarea } from '../../../core/models/tarea/tarea';
import { Table } from 'primeng/table';
import { TareaService } from '../../../core/services/tarea/tarea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css',
})
export class TareaListComponent implements OnInit {
  tareas!: Tarea[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private tareaService: TareaService, private router: Router) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.tareaService.getTareas().subscribe({
      next: (data) => {
        this.tareas = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener productos:', err);
      }
    });

    this.statuses = [
      { label: 'Pendiente', value: false },
      { label: 'Atendido', value: true }
    ];
  }

  clear(table: Table) {
    table.clear();
  }
  
  getSeverity(status: Boolean) {
    if(status){
      return 'success';
    }else{
      return 'danger';
    }
  }

  clonedTareas: { [s: string]: Tarea } = {};

  onRowEditInit(tarea: Tarea) {
    this.clonedTareas[tarea.id as number] = { ...tarea };
}

  onRowEditSave(tarea: Tarea) {

  }

  onRowEditCancel(tarea: Tarea, index: number) {
      this.tareas[index] = this.clonedTareas[tarea.id as number];
      delete this.clonedTareas[tarea.id as number];
  }
}
