import { Client } from '../../shared/models/client';
import { StateClient } from '../../shared/enums/state-client.enum';


export const fakeClients: Client [] = [
  new Client({
      id: 'a1',
      name : 'jadid',
      email: 'email1',
      tel: 'tel01',
      contact: 'contac01',
      state: StateClient.ACTIF,
  }),

  new Client({
    id: 'b1',
    name : 'titi',
    email: 'email2',
    tel: 'tel02',
    contact: 'contac02',
    state: StateClient.ACTIF,

      })
];

