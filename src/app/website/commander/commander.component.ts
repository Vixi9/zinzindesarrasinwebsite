import {Component} from '@angular/core';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.scss', '../website.scss']
})
export class CommanderComponent {

  columnsToDisplay = ['ville', 'site', 'jours', 'heures'];

  lieux = [
    {
      ville: "Champsecret",
      site: "Epicerie",
      jours: "Vendredi et Samedi",
      heures: "9h - 19h",
      query: "L'+Épicerie+de+Champsecret&zoom=14"
    },
    {
      ville: "Dompierre",
      site: "La Hélisière",
      jours: "Vendredi",
      heures: "16h30 - 18h30",
      query: "De+La+Terre+Au+Fournil&zoom=14"
    },
    {
      ville: "Saint-Bômer-les-Forges",
      site: "La Planche-Pétron",
      jours: "Vendredi",
      heures: "16h - 18h30",
      query: "Cathy,+Emilien+Lelièvre&zoom=14"
    },
  ];
}
