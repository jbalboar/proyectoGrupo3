import { Component } from '@angular/core';
import { Tarea } from '../../../core/models/tarea/tarea';
import { TareaService } from '../../../core/services/tarea/tarea.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarea-create',
  templateUrl: './tarea-create.component.html',
  styleUrl: './tarea-create.component.css'
})

/**
 * Componente para crear una nueva tarea
 * @author Jean Pierre García
 */
export class TareaCreateComponent {
  crearForm: FormGroup;

  constructor(
    private tareaService: TareaService,
    private fb: FormBuilder,
    private router: Router
    ) {
    // Inicializando el formulario con validaciones
    this.crearForm = this.fb.group({
      title: ['', [Validators.required]],
      responsable: ['', [Validators.required]],
      fechaInicial: ['', [Validators.required]],
      fechaFinal: ['', [Validators.required]],
      detail: ['', [Validators.required]],
      completed: [false, [Validators.required]]
    });
  }

  // Método para manejar la creación de la tarea
  createTask(): void {
    if (this.crearForm.valid) {
      const tarea: Tarea = this.crearForm.value; // Obtenemos los valores del formulario
      this.tareaService.createTask(tarea).subscribe({
        next: (response) => {
          console.log('Tarea creada exitosamente', response);
          this.router.navigate(['/tarea/lista']); // Redirigir a la lista de tareas
        },
        error: (error) => {
          console.error('Error al crear la tarea', error);
        }
      });
    }
  }
}