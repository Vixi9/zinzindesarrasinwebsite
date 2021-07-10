import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const shopItems = [
      {id: 1, name: "Galette à l'unité", price: 0.75},
      {id: 2, name: "Paquet de 2 galettes", price : 1.50},
      {id: 3, name: "Paquet de 4 galettes", price : 3.00},
      {id: 4, name: "Paquet de 6 galettes", price : 4.50},
    ];
    return(shopItems);
  }
}
