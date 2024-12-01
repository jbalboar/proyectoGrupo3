import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaCreateComponent } from './tarea-create.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

describe('TareaCreateComponent', () => {
  let component: TareaCreateComponent;
  let fixture: ComponentFixture<TareaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule, ReactiveFormsModule, ButtonModule],
      declarations: [TareaCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
