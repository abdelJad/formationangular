// tslint:disable-next-line:quotemark
import { ClientI } from "../interfaces/client-i";
import { StateClient } from '../enums/state-client.enum';

export class Client implements ClientI {
  id: string;
  name: string;
  email: string;
  tel: string;
  contact: string;
  state = StateClient.ACTIF;

  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

}
