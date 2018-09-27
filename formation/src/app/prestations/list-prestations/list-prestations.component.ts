import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
import { PrestationsService } from '../services/prestations.service';
import { State } from '../../shared/enums/state.enum';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Row } from '../../shared/interfaces/row';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit , OnDestroy {


    public collection: Prestation[];
  //public collection: Observable<Prestation[]>;


  public states = Object.values(State);
  public faPlusCircle = faPlusCircle;
  public row: Row ;

  public listHeader: string [];
  public sub: Subscription;

  constructor(private prestationService: PrestationsService) {

   }

  ngOnInit() {
    //this.collection = this.prestationService.collection;



    this.sub = this.prestationService.collection.subscribe((data) => {
      this.collection = data;
    });
    this.listHeader =  ['Type', 'Client', 'Nb_jours', 'Tj_ HT', 'Total_HT', 'Total_TTC', 'Action'];
    this.row = {
      route: 'add',
      icon: faPlusCircle,
      libelle: 'Ajouter une prestation'

    };


 }
 ngOnDestroy(): void {
  this.sub.unsubscribe();
}



}
