import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'masculino',
  standalone: true
})
export class MasculinoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
