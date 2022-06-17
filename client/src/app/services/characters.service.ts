import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interface/characterInterface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private htt: HttpClient) {}
  getCharacters() {
    const url = 'http://localhost:3001/characters';
    return this.htt.get<[Character]>(url);
  }
}
