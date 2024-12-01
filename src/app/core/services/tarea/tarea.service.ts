import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Tarea } from '../../models/tarea/tarea';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private urlBase = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  /**
  * @author Juan Balboa Rojas
  */
  getTareas(): Observable<Tarea[]> {
    return this.http
      .get<Tarea[]>(this.urlBase)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError('Ocurrió un error al mostrar las tareas');
  }

  /**
   * 
   * @param tarea
   * @returns
   * @author Jean Pierre García
   */
  createTask(tarea: Tarea): Observable<Tarea[]> {

    return this.http.post<Tarea[]>(this.urlBase, tarea).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * 
   * @param tarea
   * @returns
   * @author Washington Huallpamaita
   * @abstract Implementa servicio para actualizar una tarea
   */
  updateTask(tarea: Tarea): Observable<Tarea[]> {
    let id = tarea.id;
    return this.http.put<Tarea[]>(this.urlBase + "/" + id, tarea).pipe(
      catchError(this.handleError)
    );
  }
  /**
 * 
 * @param tarea
 * @returns
 * @author Washington Huallpamaita
  * @abstract Implementa servicio para eliminar una tarea
 */
  deleteTask(id: Number): Observable<Tarea[]> {
    return this.http.delete<Tarea[]>(this.urlBase + "/" + id).pipe(
      catchError(this.handleError)
    );
  }

}