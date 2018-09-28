import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
import { fakePrestations } from './fakeprestations';
import { State } from '../../shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection: Observable<Prestation[]>;
  public msg$ = new Subject(); // creation observable

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    this.itemsCollection = afs.collection<Prestation>('prestaions');
    this._collection = this.itemsCollection.valueChanges().pipe(
      map((data) => data.map((presta) => new Prestation(presta)))
      );
      this.http.get<Prestation[]> ('url_api/prestations');

  }


    get collection(): Observable<Prestation[]> {
    return this._collection;
   }



   // set collection

   set collection(col: Observable<Prestation[]> ) {
    this._collection = col;
  }
   // get item in collectione by id



   public update1 (item: Prestation, state: State) {
     item.state = state;
   }

   public add1(item: Prestation): void {
     //this.itemsCollection.get(item);
   }

    // add presta
  add(item: Prestation): Promise<any> {
     const id = this.afs.createId();
     const prestation = { id, ...item };
     return this.itemsCollection.doc(id).set(prestation).catch((e) => {
       console.log(e);
     });
    // return this.http.post('urlapi/prestations', item);
  }



  update(item: Prestation, option?: State): Promise<any> {
    const presta  = {...item};
    if (option) {
      presta.state = option;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch('urlapi/prestations/'+item.id, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlapi/prestations/${item.id}`);
  }

  public getPrestation(id: string) {
    return this.itemsCollection.doc(id).get();
  }







}
