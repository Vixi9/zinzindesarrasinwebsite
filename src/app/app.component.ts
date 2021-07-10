import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
}
