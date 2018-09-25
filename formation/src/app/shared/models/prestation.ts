import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: string;  type_presta: string;
  client: string;
  nb_jours = 0;
  tjm_ht = 0;
  taux_tva = 20;
  state = State.OPTION;


  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  public total_HT() {
    return this.tjm_ht * this.nb_jours;
  }

  public total_TTC(tva?: number) {
    if (!tva) {
      return this.total_HT() * (1 + this.taux_tva / 100);
    }
    if (tva <= 0) {
      return this.total_HT();
    }
    return this.total_HT() * (1 + this.taux_tva / 100);
  }
}
