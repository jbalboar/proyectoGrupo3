import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirBoolean'
})
export class ConvertirBooleanPipe implements PipeTransform {

  /**
  * @author Juan Balboa Rojas
  */
  transform(value: boolean): string {
    return value ? 'Atendido' : 'Pendiente';
  }

}
