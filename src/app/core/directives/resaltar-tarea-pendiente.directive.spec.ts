import { ElementRef } from '@angular/core';
import { ResaltarTareaPendienteDirective } from './resaltar-tarea-pendiente.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareaListComponent } from '../../features/tareas/tarea-list/tarea-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ResaltarTareaPendienteDirective', () => {
  let fixture: ComponentFixture<TareaListComponent>;
  let divElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule, FormsModule, ToastModule, TableModule, DropdownModule],
      declarations: [ResaltarTareaPendienteDirective, TareaListComponent]  // Declaramos la directiva y el componente de prueba
    });

    fixture = TestBed.createComponent(TareaListComponent);
    fixture.detectChanges();  // Detectamos los cambios para aplicar la directiva

    divElement = fixture.nativeElement.querySelector('div');  // Obtenemos el elemento al que se aplica la directiva
  });

  it('should create an instance', () => {
      expect(divElement).toBeTruthy();
  });
});
