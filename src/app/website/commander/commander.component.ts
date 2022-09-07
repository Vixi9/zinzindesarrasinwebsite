import { Component, ViewChild } from '@angular/core';
import { Place } from "../models/place";
import { MapInfoWindow, MapMarker } from "@angular/google-maps";
import { GoogleMapsService } from "../service/google-maps.service";
import { Observable } from "rxjs";


@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: [ './commander.component.scss', '../website.scss' ]
})
export class CommanderComponent {
  public columnsToDisplay = [ 'name', 'address', 'days', 'hours' ];

  public places: Place[] = [ {
    address: "22 Rue Colonel A Lefevre, 61700 Champsecret",
    name: "L'Épicerie de Champsecret\n",
    days: "Vendredi et Samedi",
    hours: "9h - 19h",
    position: { lat: 48.60947162397679, lng: -0.5503297594450459 }
  }, {
    address: "77-78 La Helisière, 61700 Dompierre",
    name: "De la terre au fournil",
    days: "Vendredi",
    hours: "16h30 - 18h30",
    position: { lat: 48.63511332410531, lng: -0.5665502729388208 }
  }, {
    address: "La Planche-Petron, 61700 Saint-Bômer-les-Forges",
    name: "Cathy et Emilien Lelièvre\n",
    days: "Vendredi",
    hours: "16h - 18h30",
    position: { lat: 48.64779852409452, lng: -0.5832310594440384 }
  }, ];

  public mapOptions: google.maps.MapOptions = {
    center: { lat: 48.63511332410531, lng: -0.5665502729388208 },
    zoom: 12,
    fullscreenControl: false,
    mapTypeControl: false
  };

  public apiLoaded: Observable<boolean>;

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;

  public focusedPlace: Place = this.places[0];

  constructor(googleMaps: GoogleMapsService) {
    this.apiLoaded = googleMaps.isApiLoaded;
  }

  getFocusedPlaceInfo(): string {
    return this.focusedPlace.days + '<br/>' + this.focusedPlace.hours;
  }

  openInfoWindow(marker: MapMarker, place: Place) {
    this.infoWindow.open(marker, true);
    this.focusedPlace = place;
  }
}
