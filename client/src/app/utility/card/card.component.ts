import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { EpisodesService } from 'src/app/services/episodes.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  public characters: any = [];
  public episodes: any = [];
  constructor(
    private characterservice: CharactersService,
    private episodesService: EpisodesService
  ) {}
  ngOnInit(): void {
    this.characterservice.getCharacters().subscribe((resp) => {
      this.characters = resp;
      console.log(this.characters);
    });
    this.episodesService.getEpisodes().subscribe((resp) => {
      this.episodes = resp;
      console.log(this.episodes);
    });
  }
}
