import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { LoginModule } from './login/login.module';
import { UiModule } from './ui/ui.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';

import { AngularFireModule } from '@angular/fire';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.firebase';

import { HttpClientModule } from '@angular/common/http';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    LoginModule,
    PageNotFoundModule,
    HttpClientModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr' } ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }

}
