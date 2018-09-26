import { Injectable } from '@angular/core';
import { Client } from '../../shared/models/client';
import { fakeClients } from './fakeClients';
import { StateClient } from '../../shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private _collection: Client[];
  constructor() {
  this._collection = fakeClients;

  }

  get collection(): Client[] {
    return this._collection;
   }



   // set collection

   set collection(col: Client[]) {
    this._collection = col;
  }
   // get item in collectione by id



   public update (item: Client, state: StateClient) {
     item.state = state;
   }

}
