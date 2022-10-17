import {Component, EventEmitter, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        visibility: 'visible',
        opacity: 100,
        'max-height': '200px'
      })),
      state('closed', style({
        visibility: 'hidden',
        opacity: 0,
        'max-height': '0px'
      })),
      transition('closed <=> open', [
        animate('200ms')
      ])
    ]),

    trigger('expandIconRotate', [
      state('open', style({
        transform: 'rotate(90deg)'
      })),
      state('closed', style({
        transform: 'none'
      })),
      transition('closed <=> open', [
        animate('200ms')
      ])
    ])
  ]
})
export class SidenavListComponent {

  @Output() sidenavClose = new EventEmitter();

  productMenu: boolean = false;
  discoveryMenu: boolean = false;

  toggleProductMenu() {
    this.productMenu = !this.productMenu;
  }

  toggleDiscoveryMenu() {
    this.discoveryMenu = !this.discoveryMenu;
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
