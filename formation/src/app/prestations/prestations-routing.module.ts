import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPrestationsComponent } from 'src/app/prestations/list-prestations/list-prestations.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { ResolveeditService } from './services/resolveedit.service';



const appRoutes: Routes = [
  { path: '',      component: ListPrestationsComponent },
  { path: 'add',   component: AddPrestationComponent },
  { path: 'edit/:id',  component: EditPrestationComponent ,
     resolve: {
      item: ResolveeditService
  }}
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
