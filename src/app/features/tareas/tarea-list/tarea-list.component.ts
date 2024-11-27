import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarea } from '../../../core/models/tarea/tarea';
import { Table } from 'primeng/table';
import { TareaService } from '../../../core/services/tarea/tarea.service';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css',
})
export class TareaListComponent implements OnInit {
  tareas!: Tarea[];

  @ViewChild('dt') dt: Table | undefined;

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private tareaService: TareaService) {}

  applyFilterGlobal($event:any, stringVal:string) {
    this.dt?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  ngOnInit() {
    this.tareaService.getCustomersLarge().then((tareas:any) => {
      this.tareas = tareas;
      this.loading = false;

      this.tareas.forEach(
        (tareas) => (tareas.fecha = new Date(<Date>tareas.fecha))
      );
    });

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
  }

  clear(table: Table) {
    table.clear();
  }
  
  getSeverity(status: string) {
    switch (status) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return undefined;
    }
    return undefined;
  }
}
