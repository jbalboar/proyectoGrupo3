import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Tarea } from '../../models/tarea/tarea';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private urlBase = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTareas(): Observable<Tarea[]> {
    return this.http
      .get<Tarea[]>(this.urlBase)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError('Ocurrió un error al mostrar las tareas');
  }
}
