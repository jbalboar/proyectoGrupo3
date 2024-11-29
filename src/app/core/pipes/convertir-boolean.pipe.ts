import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirBoolean'
})
export class ConvertirBooleanPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Atendido' : 'Pendiente';
  }

}
