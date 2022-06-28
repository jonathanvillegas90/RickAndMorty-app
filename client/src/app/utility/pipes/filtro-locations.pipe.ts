import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroLocations'
})
export class FiltroLocationsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
