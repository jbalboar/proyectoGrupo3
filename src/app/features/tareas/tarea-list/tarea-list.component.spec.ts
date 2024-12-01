import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaListComponent } from './tarea-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TareaService } from '../../../core/services/tarea/tarea.service';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TareaListComponent', () => {
  let component: TareaListComponent;
  let fixture: ComponentFixture<TareaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule, ToastModule, TableModule, DropdownModule],
      declarations: [TareaListComponent],
      providers:[TareaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
