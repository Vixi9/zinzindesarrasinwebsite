import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { GoogleMapsService } from "../../services/google-maps.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.scss', '../../website.scss' ]
})
export class ContactComponent {

  mapOptions: google.maps.MapOptions = {
    center: { lat: 48.61312753460924, lng: -0.5919556464350556 },
    zoom: 7,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false
  }

  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral = { lat: 48.61312753460924, lng: -0.5919556464350556 };


  public apiLoaded: Observable<boolean>;

  constructor(googleMaps: GoogleMapsService) {
    this.apiLoaded = googleMaps.isApiLoaded;
  }
}
