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
