import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPrestationsComponent } from 'src/app/prestations/list-prestations/list-prestations.component';


const appRoutes: Routes = [
  { path: '',      component: ListPrestationsComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [

  ]
})
export class PrestationsRoutingModule { }
