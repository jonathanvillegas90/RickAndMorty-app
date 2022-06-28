import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroEpisodes'
})
export class FiltroEpisodesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
