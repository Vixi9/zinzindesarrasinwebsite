import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../website.scss']
})
export class ContactComponent implements OnInit {

  options: google.maps.MapOptions = {
    center: {lat: 48.61312753460924, lng: -0.5919556464350556},
    zoom: 7,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControlOptions: {mapTypeIds: ['roadmap']},
  }

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [{lat: 48.61312753460924, lng: -0.5919556464350556}];

  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyB_tqZYJwga3bFNdvoZ-k1b4wLm8O05zuA', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  ngOnInit(): void {
  }

}
