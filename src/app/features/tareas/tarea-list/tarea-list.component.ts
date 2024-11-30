import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarea } from '../../../core/models/tarea/tarea';
import { Table } from 'primeng/table';
import { TareaService } from '../../../core/services/tarea/tarea.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { identity } from 'rxjs';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css',
  providers: [MessageService]
})
export class TareaListComponent implements OnInit {
  tareas!: Tarea[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private messageService: MessageService, private tareaService: TareaService, private router: Router) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.getTasks();
    this.statuses = [
      { label: 'Pendiente', value: false },
      { label: 'Atendido', value: true }
    ];
  }

  clear(table: Table) {
    table.clear();
  }

  getSeverity(status: Boolean) {
    if (status) {
      return 'success';
    } else {
      return 'danger';
    }
  }

  clonedTareas: { [s: string]: Tarea } = {};
  getTasks() {
    this.tareaService.getTareas().subscribe({
      next: (data) => {
        this.tareas = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener productos:', err);
      }
    });
  }

  onRowEditInit(tarea: Tarea) {
    this.clonedTareas[tarea.id as number] = { ...tarea };
  }

  /**
   * 
   * @param tarea
   * @returns
   * @author Washington Huallpamaita
   * @abstract Implementa metodo para actualizar una tarea
   */
  
  onRowEditSave(tarea: Tarea) {
    /* Verifica que las fecha inicial sea menor que la fecha final*/
    if (tarea.fechaInicial > tarea.fechaFinal) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error en fechas',
        detail: 'La fecha inicial debe ser menor que la ',
      });
    } else { // Si pasa la validacion de fechas se llama al servicio de actualizar
      this.tareaService.updateTask(tarea).subscribe({
        next: (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Actualización Correcta!',
            detail: 'Se actualizó el registro correctamente.',
          });
          this.router.navigate(['/tarea/lista']); // Redirigir a la lista de tareas
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Actualización Incorrecta!',
            detail: 'No se actualizó registro',
          });
        }
      });
    }


  }
    /**
   * 
   * @param tarea
   * @returns
   * @author Washington Huallpamaita
    * @abstract Implementa metodo para eliminar una tarea
   */
  onRowDeleteInit(tarea: Tarea) {
    this.tareaService.deleteTask(tarea.id).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Eliminacion Correcta!',
          detail: 'Se eliminó el registro correctamente.',
        });
        this.getTasks();
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error al eliminar!',
          detail: 'No se eliminó el registro',
        });
      }
    })
  }

  onRowEditCancel(tarea: Tarea, index: number) {
    this.tareas[index] = this.clonedTareas[tarea.id as number];
    delete this.clonedTareas[tarea.id as number];
  }
  updateStatus(status:any){
    console.log(status);
  }
}
