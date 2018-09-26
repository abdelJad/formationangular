import { Component, OnInit } from '@angular/core';
import { Client } from '../../shared/models/client';
import { StateClient } from '../../shared/enums/state-client.enum';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ClientsService } from '../services/clients.service';
import { Row } from '../../shared/interfaces/row';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  public collection: Client [];
  public states = Object.values(StateClient);
  public faPlusCircle = faPlusCircle;
  public row: Row;

  public listHeader: string [];
  constructor(private clientService: ClientsService) { }

  ngOnInit() {
    this.collection = this.clientService.collection;
    this.listHeader =  ['Id', 'Name', 'Email', 'Tel', 'Contact', 'State'];
    this.row = {
      route: 'add',
      icon: faPlusCircle,
      libelle: 'Ajouter une prestation'
    };

}
}
