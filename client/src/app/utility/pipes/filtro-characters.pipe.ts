import { Pipe, PipeTransform } from '@angular/core';
import { Character } from 'src/app/interface/characterInterface';

@Pipe({
  name: 'filtroCharacters',
})
export class FiltroCharactersPipe implements PipeTransform {
  transform(characters: Character[], ...args: unknown[]): Character[] {
    return [];
  }
}
