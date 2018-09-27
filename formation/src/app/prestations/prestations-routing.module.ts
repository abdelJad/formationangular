import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPrestationsComponent } from 'src/app/prestations/list-prestations/list-prestations.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';



const appRoutes: Routes = [
  { path: '',      component: ListPrestationsComponent },
  { path: 'add',      component: AddPrestationComponent }
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
