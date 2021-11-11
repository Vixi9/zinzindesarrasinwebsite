import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import apikey from "../../../../apikey.json";

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.scss', '../website.scss']
})
export class CommanderComponent implements OnInit {

  @ViewChild('map') map!: ElementRef<HTMLIFrameElement>;

  columnsToDisplay = ['ville', 'site', 'jours', 'heures', 'query'];

  lieux = [
    { ville: "Champsecret", site: "Epicerie", jours: "Vendredi et Samedi", heures:"9h - 19h", query:"L'+Épicerie+de+Champsecret&zoom=14"},
    { ville: "Dompierre", site: "La Hélisière", jours: "Vendredi", heures:"16h30 - 18h30", query: "De+La+Terre+Au+Fournil&zoom=14"},
    { ville: "Saint-Bômer-les-Forges", site: "La Planche-Pétron", jours: "Vendredi", heures:"16h - 18h30", query: "Cathy,+Emilien+Lelièvre&zoom=14"},
  ];

  options: google.maps.MapOptions = {
    center: {lat: 48.63105434679198, lng: -0.5737576110045337},
    zoom: 12,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControlOptions: {mapTypeIds: ['roadmap']},
  }

  markerOptions: google.maps.MarkerOptions = {draggable: false}; 
  markerPositions: google.maps.LatLngLiteral[] = [
    {lat: 48.609227292707665, lng: -0.5504741880291169},
    {lat: 48.635290691911536, lng: -0.568203915262448},
    {lat: 48.64778482754452, lng: -0.5830734562992808},
  ];

  apiLoaded: Observable<boolean>;
  
  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=' + apikey.googleMaps, 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  ngOnInit(): void {
  }

  setMapTarget(query: string) {
    this.map.nativeElement.setAttribute('src', 'https://www.google.com/maps/embed/v1/place?key=' + apikey.googleMaps + '&q=' + query);
  }

}
