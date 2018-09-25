import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
import { fakePrestations } from './fakeprestations';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private _collection: Prestation[];
  constructor() {
  this._collection = fakePrestations;

  }
   //get collection

    get collection(): Prestation[] {
    return this._collection;
   }



   // set collection

   set collection(col: Prestation[]) {
    this._collection = col;
  }
   // get item in collectione by id

   //update

   //delete



}
