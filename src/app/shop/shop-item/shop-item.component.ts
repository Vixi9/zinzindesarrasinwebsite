import { Component, OnInit, Input } from '@angular/core';
import { ShopItem } from '../shop-item';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {

  @Input() shopItem : ShopItem = {
    id: 1,
    name: 'Galette',
    price: 0.75,
    imgSrc: '../../assets/images/galette.jpg',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
