import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { State } from '../../../shared/enums/state.enum';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  public states = Object.values(State);
  @Input() item: Prestation;
  constructor(private prestationServices: PrestationsService) { }

  ngOnInit() {
  }
  public changeState(e) {
    console.log(e.target.value);
    const state = e.target.value;
    this.prestationServices.update(this.item, state);
  }

}
