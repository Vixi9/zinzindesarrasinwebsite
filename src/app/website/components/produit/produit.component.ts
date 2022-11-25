import { Component, ViewChild } from '@angular/core';
import { Observable } from "rxjs";
import { GoogleMapsService } from "../../services/google-maps.service";
import { Place } from "../../services/models/place";
import { MapInfoWindow, MapMarker } from "@angular/google-maps";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: [ './produit.component.scss', '../../website.scss' ]
})
export class ProduitComponent {

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;

  public mapOptions: google.maps.MapOptions = {
    center: { lat: 48.63511332410531, lng: -0.5665502729388208 },
    zoom: 12,
    fullscreenControl: false,
    mapTypeControl: false
  };

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

  public focusedPlace: Place = this.places[0];

  apiLoaded: Observable<boolean>;

  constructor(private googleMapsService: GoogleMapsService) {
    this.apiLoaded = googleMapsService.isApiLoaded
  }

  getFocusedPlaceInfo(): string {
    return this.focusedPlace.days + '<br/>' + this.focusedPlace.hours;
  }

  openInfoWindow(marker: MapMarker, place: Place) {
    this.infoWindow.open(marker, true);
    this.focusedPlace = place;
  }
}
