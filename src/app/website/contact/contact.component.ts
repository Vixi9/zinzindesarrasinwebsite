import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../website.scss']
})
export class ContactComponent implements OnInit {

  // options: google.maps.MapOptions = {
  //   center: {lat: 48.61312753460924, lng: -0.5919556464350556},
  //   zoom: 7,
  //   streetViewControl: false,
  //   fullscreenControl: false,
  //   mapTypeControlOptions: {mapTypeIds: ['roadmap']},
  // }
  // markerOptions: google.maps.MarkerOptions = {draggable: false};
  // markerPositions: google.maps.LatLngLiteral[] = [{lat: 48.61312753460924, lng: -0.5919556464350556}];

  private route: ActivatedRouteSnapshot;

  constructor(route: ActivatedRoute) {
    this.route = route.snapshot;
  }

  ngOnInit(): void {
    console.log(this.route.data);
  }

}
