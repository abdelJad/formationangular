import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationsComponent } from './list-prestations/list-prestations.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListPrestationsComponent],
  exports : [ListPrestationsComponent]
})
export class PrestationsModule { }
