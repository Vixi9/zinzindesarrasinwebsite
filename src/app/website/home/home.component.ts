import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

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
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(el: HTMLElement, block : ScrollLogicalPosition): void {
    el.scrollIntoView({behavior: "smooth", block: block, inline:"start"});
  }
}
