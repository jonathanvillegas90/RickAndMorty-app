import { Component, OnInit, Input } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  public characters: any;
  constructor(private characterservice: CharactersService) {}

  ngOnInit(): void {
    this.characterservice.getCharacters().subscribe((resp) => {
      this.characters = resp;
      console.log(this.characters);
    });
  }
}
