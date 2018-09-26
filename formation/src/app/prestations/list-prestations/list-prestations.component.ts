import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
import { PrestationsService } from '../services/prestations.service';
import { State } from '../../shared/enums/state.enum';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  public collection: Prestation[];
  public states = Object.values(State);

  public headers: string [];

  constructor(private prestationService: PrestationsService) {
   }

  ngOnInit() {
    this.collection = this.prestationService.collection;
    this.headers =  ['Type', 'Client', 'Nb_jours', 'Tj_ HT', 'Total_HT', 'Total_TTC', 'Action'];
 }
}
