import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {
  public locations: any = [];
  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locationsService.getLocations().subscribe((resp) => {
      this.locations = resp;
      console.log(this.locations);
    });
  }
}
