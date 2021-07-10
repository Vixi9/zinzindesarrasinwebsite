import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShopItem } from './shop-item';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private shopUrl = "api.zinzindusarrasin.web-edu.fr/shop";

  constructor(private http: HttpClient) {}

  getShopItems(): Observable<ShopItem[]> {
    return this.http.get<ShopItem[]>(this.shopUrl);
  }
}
