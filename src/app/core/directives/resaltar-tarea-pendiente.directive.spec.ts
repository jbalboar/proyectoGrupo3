import { ElementRef } from '@angular/core';
import { ResaltarTareaPendienteDirective } from './resaltar-tarea-pendiente.directive';
import { ComponentFixture } from '@angular/core/testing';
import { TareaListComponent } from '../../features/tareas/tarea-list/tarea-list.component';

describe('ResaltarTareaPendienteDirective', () => {
  let fixture: ComponentFixture<TareaListComponent>;
  let divElement: HTMLElement;

  it('should create an instance', () => {
      expect(fixture.componentInstance).toBeTruthy();
  });
});
