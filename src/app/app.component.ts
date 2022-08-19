import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'zinzindesarrasin';
}

export const scrollEl = document.documentElement;
export const root = document.documentElement

export let scrollPos = 0;

export function animation() {
  if (scrollPos !== scrollEl.scrollTop) {
    scrollPos = scrollEl.scrollTop
    root.style.setProperty('--scrollPos', scrollPos + 'px')
  }
  window.requestAnimationFrame(animation)
}

window.requestAnimationFrame(animation)
