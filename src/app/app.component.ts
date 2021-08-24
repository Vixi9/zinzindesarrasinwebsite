import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeInAnimation
  ]
})

export class AppComponent {

  title = 'zinzindusarrasin';

  config: any;
  fullpage_api: any;

  constructor() {
    this.config = {
      navigation: true,
      verticalCentered: true
    }
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
