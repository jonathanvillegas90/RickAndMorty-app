import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../interface/locationInterface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(public http: HttpClient) {}
  getLocations() {
    const url = environment.base_url + '/locations/0';
    return this.http.get<[Location]>(url);
  }
  getNextLocations(num: number) {
    const url = environment.base_url + '/locations/' + num;
    console.log(url);
    return this.http.get<[Location]>(url);
  }
}
