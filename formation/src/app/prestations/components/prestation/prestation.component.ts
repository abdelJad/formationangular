import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { State } from '../../../shared/enums/state.enum';
import { PrestationsService } from '../../services/prestations.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { stat } from 'fs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  public states = Object.values(State);
  @Input() item: Prestation;
  public faTrashAlt = faTrashAlt;
  constructor(private prestationServices: PrestationsService, private router: Router ) { }

  ngOnInit() {
  }
  public changeState(e) {
    console.log(e.target.value);
    const state = e.target.value;
    this.prestationServices.update(this.item, state).then((date) => {
      console.log('then .... traitement à faire');
      this.item.state = state;
      this.prestationServices.msg$.next('Statut  : ' + this.item.state);
    });
  }

  public delete () {
    console.log(this.item.state);
    this.prestationServices.delete(this.item).then((data) => {
      this.prestationServices.msg$.next(' Le client   ' + this.item.client);
    });
  }

  public edit() {
    this.router.navigate(['./prestations/edit/' + this.item.id]);
  }

}
