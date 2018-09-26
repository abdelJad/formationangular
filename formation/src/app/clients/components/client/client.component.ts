import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../../shared/models/client';
import { StateClient } from '../../../shared/enums/state-client.enum';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public states = Object.values(StateClient);
  @Input() item: Client;
  constructor(private clientServices: ClientsService) { }

  ngOnInit() {
    console.log('in ClientComponent ');

  }

  public changeState(e) {
    console.log(e.target.value);
    const state = e.target.value;
    this.clientServices.update(this.item, state);
  }





}
