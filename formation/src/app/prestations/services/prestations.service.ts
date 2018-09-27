import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
import { fakePrestations } from './fakeprestations';
import { State } from '../../shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection: Observable<Prestation[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Prestation>('prestaions');
    this._collection = this.itemsCollection.valueChanges().pipe(
      map((data) => data.map((presta) => new Prestation(presta)))
      );


  }


    get collection(): Observable<Prestation[]> {
    return this._collection;
   }



   // set collection

   set collection(col: Observable<Prestation[]> ) {
    this._collection = col;
  }
   // get item in collectione by id



   public update (item: Prestation, state: State) {
     item.state = state;
   }

   public add(item: Prestation): void {
     //this.itemsCollection.get(item);
   }






}
