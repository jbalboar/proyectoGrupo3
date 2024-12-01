import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltarTareaPendiente]'
})
export class ResaltarTareaPendienteDirective {

  @Input() appResaltarTareaPendiente: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  /**
  * @author Juan Balboa Rojas
  */
  ngOnInit() {
    // Verifica si la tarea no está completada (tareas.completed === false)
    if (!this.appResaltarTareaPendiente) {
      // Si es false, aplica el estilo
      this.renderer.addClass(this.el.nativeElement, 'highlight-marcar-pendiente');
    }
  }

}
