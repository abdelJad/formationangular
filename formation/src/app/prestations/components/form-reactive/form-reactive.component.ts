import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Prestation } from '../../../shared/models/prestation';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
  public states = Object.values(State);
  public form: FormGroup;  // le nom du formulaire [formGroup]="form"
  @Input()  init = new Prestation();
  @Output() nPresta: EventEmitter<Prestation> = new EventEmitter();


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  public process(): void {
    this.nPresta.emit(this.form.value);

  }

  private createForm(): void {
    this.form = this.fb.group({

      type_presta: [
        this.init.type_presta, Validators.required
      ],
      client: [
        this.init.client,
        Validators.compose([Validators.required, Validators.minLength(2)])
      ],
      nb_jours: [
        this.init.nb_jours
      ],
      tjm_ht: [
        this.init.tjm_ht
      ],
      taux_tva: [
        this.init.taux_tva
      ],
      state: [
        this.init.state
      ],
  });
  }

  public isError(input: string): boolean {
    return  (this.form.get(input).invalid && this.form.get(input).touched);
  }







}
