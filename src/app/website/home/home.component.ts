import {animate, style, transition, trigger} from '@angular/animations';
import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../website.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('3s', style({opacity: 100}))
      ]),
    ]),
  ],
})
export class HomeComponent {

  scrollTo(el: HTMLElement, block : ScrollLogicalPosition): void {
    el.scrollIntoView({behavior: "smooth", block: block, inline:"start"});
  }
}
