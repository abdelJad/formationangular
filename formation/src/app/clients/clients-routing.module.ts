import { NgModule } from '@angular/core';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '',   component: ListClientsComponent }
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
export class ClientsRoutingModule { }
