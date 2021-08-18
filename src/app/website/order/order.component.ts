import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  columnsToDisplay = ['ville', 'site', 'jours', 'heures'];

  horaires = [
    { ville: "Champsecret", site: "Epicerie", jours: "Vendredi et Samedi", heures:"de 9h à 19h"},
    { ville: "Dompierre", site: "Ferme de la Hélisière", jours: "Vendredi", heures:"de 16h30 à 18h30"},
    { ville: "Saint Bomer les Forges", site: "Ferme maraîchère de la Planche-Pétron", jours: "Vendredi", heures:"de 16h à 18h30"},
];

  constructor() { }

  ngOnInit(): void {
  }

}
