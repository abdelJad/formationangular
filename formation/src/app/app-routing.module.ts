import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
 { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'prestations',
    loadChildren: './prestations/prestations.module#PrestationsModule',
  },
  { path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule',
  },
  { path: 'add',
  redirectTo: '/login',
  pathMatch: 'full'
},
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true,
        preloadingStrategy: PreloadAllModules
      } // <-- debugging purposes only
    )
    // other imports here
  ],
  declarations: []
})
export class AppRoutingModule { }
