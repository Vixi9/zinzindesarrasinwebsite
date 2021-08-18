import { Component, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ClientsService, Client } from './clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  error: any;
  clients: Array<Client> = Array<Client>();

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.getClients();
  }

  clear() {
    this.error = undefined;
  }

  getClients() {
    this.clientsService.getClients()
      .subscribe(
        (data: Array<any>) => {
          data.forEach(element => {
            this.clients.push({idClient: element.idClient, nomClient: element.nomClient, prenomClient: element.prenomClient, emailClient: element.emailClient})
          });
        },
        (error) => this.error = error
      );
  }

}
