import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../interface/locationInterface';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(public http: HttpClient) {}
  getLocations() {
    const url = 'http://localhost:3001/locations/0';
    return this.http.get<[Location]>(url);
  }
}
