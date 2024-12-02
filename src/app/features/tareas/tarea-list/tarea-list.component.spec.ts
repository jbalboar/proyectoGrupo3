import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
 
import { TareaListComponent } from './tarea-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TareaService } from '../../../core/services/tarea/tarea.service';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tarea } from '../../../core/models/tarea/tarea';
import { Subject } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
 
describe('TareaListComponent', () => {
  let component: TareaListComponent;
  let fixture: ComponentFixture<TareaListComponent>;
  let tareas: Tarea[] = [{id: 1, title: 'Titulo prueba', detail: 'Detalle prueba', responsable: 'Jhon Reynoso', fechaInicial: '2024-12-02', fechaFinal: '2024-12-05', completed: false}]
 
  const myServiceSubject = new Subject<Tarea[]>();
 
  const myServiceMock = jasmine.createSpyObj('TareaService', tareas, {getTareas: ()=> myServiceSubject.asObservable() })
 
  beforeEach(waitForAsync(()=> {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule, ToastModule, TableModule, DropdownModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [TareaListComponent],
      providers: [
        {provide: TareaService, useValue: myServiceMock}
      ]
    }).compileComponents()
  }))
 
  beforeEach(() => {
    fixture = TestBed.createComponent(TareaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('inicia listar', () => {
    myServiceSubject.next(tareas);
    expect(component.tareas.length).toBe(1);
    expect(component.tareas[0].responsable).toBe('Jhon Reynoso')
  });
});