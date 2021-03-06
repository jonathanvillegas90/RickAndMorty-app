import { Component, OnInit } from '@angular/core';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
})
export class EpisodesComponent implements OnInit {
  public episodes: any = [];
  constructor(private episodesService: EpisodesService) {}

  ngOnInit(): void {
    this.episodesService.getEpisodes().subscribe((resp) => {
      this.episodes = resp;
      console.log(this.episodes);
    });
  }
}
