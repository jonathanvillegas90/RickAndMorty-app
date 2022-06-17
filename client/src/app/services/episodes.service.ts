import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episode } from '../interface/episodesInterface';

@Injectable({ providedIn: 'root' })
export class EpisodesService {
  constructor(private http: HttpClient) {}
  getEpisodes() {
    const url = 'http://localhost:3001/episodes';
    return this.http.get<[Episode]>(url);
  }
  getOneEpisode(number: number) {
    const url = `http://localhost:3001/episodes/search/${number}`;
    return this.http.get<[Episode]>(url);
  }
}
